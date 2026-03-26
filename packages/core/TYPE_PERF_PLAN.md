# Type Performance Optimization Plan

## Problem

The playground query (AniList schema) takes ~2 seconds for `checkVariableDeclaration` on the `query` variable.
`tsc --generateTrace` reveals **28,685 type instantiations** for a query that only touches 4 fields.

## Root Cause: Eager Recursive Type Expansion

When TypeScript resolves `PrepareSelection<Query, Variables>`, it eagerly expands the
full type tree. The expansion chain:

```
gqfn('query FetchAnime', vars, selection)
  → operation.ts: Selection extends PrepareSelection<Query, Variables>
    → prepare.ts: ObjectSelection<Query, Vars>
      → ObjectSelectionContext<Query, Vars>
        → ObjectSelectionOnFields<Query, Vars>: mapped type over ALL ~30 Query fields
          → SelectionOnField for EACH field
            → SelectionFnOnField<FieldType, Args, Vars>
              → SelectionDollar<PrepareSelection<FieldType, Vars>, ...>
                → recursively expands FieldType (e.g. Media has ~50 fields)
                  → continues recursing into every reachable type...
```

### Key numbers from trace

| Metric | Count |
|--------|-------|
| Total type instantiations | 28,685 |
| `SelectionFnOnField` instances | 954 (63 unique type args) |
| `ObjectSelection` instances | 276 (7-8x per reachable object type) |
| `SelectionDollar`-related (dollar.ts) | 2,275 |
| Top `structuredTypeRelatedTo` cost | 4,239ms total |
| `checkVariableDeclaration` cost | 1,945ms |
| `getVariancesWorker` on `PrepareSelection` | 139ms single call |

### Why it's slow

1. **`ObjectSelectionOnFields`** (prepare.ts L42-50): Mapped type iterates ALL fields of an
   object, computing `SelectionOnField` for each — even fields the user never selects.

2. **`SelectionFnOnField`** (prepare.ts L78-91): Its callback parameter contains
   `SelectionDollar<PrepareSelection<Type, Variables>, ...>`. TypeScript eagerly resolves
   `PrepareSelection<Type, Variables>` as a type argument, recursively expanding sub-types.

3. **`ObjectSelectionOnInlineFragments`** (prepare.ts L50-57): Expands all union/interface
   members eagerly.

4. **Double evaluation in operation.ts**: Each overload has both
   `Selection extends PrepareSelection<...>` (constraint) and
   `Exact<PrepareSelection<...>, Selection>` (parameter), evaluating `PrepareSelection` twice.

## Fix Strategy: Defer `PrepareSelection` Recursion

### Step 1: Make `SelectionFnOnField` lazy

Current (eager — `PrepareSelection<Type, Vars>` is computed immediately as a type arg):
```ts
interface SelectionFnOnField<Type, PreparedArguments, Variables> {
  ($: SelectionDollar<
    PrepareSelection<Type, Variables>,  // ← eagerly expanded
    PreparedArguments, Variables, Type
  >): DollarPackage<any, boolean>
}
```

Target (lazy — pass `Type` and `Variables` through, let `SelectionDollar` defer):
```ts
interface SelectionFnOnField<Type, PreparedArguments, Variables> {
  ($: LazySelectionDollar<Type, PreparedArguments, Variables>
  ): DollarPackage<any, boolean>
}
```

Where `LazySelectionDollar` accepts `Type` instead of pre-computed `Shape`, and only
computes `PrepareSelection<Type, Variables>` when the user actually calls `$()`.

The key insight: TypeScript evaluates **generic interface members lazily** — members of
`SelectionDollar` are only resolved when accessed. By moving `PrepareSelection` into the
call signature of `$()` rather than as an eagerly-computed type parameter, we avoid
expanding types the user never touches.

### Step 2: Deduplicate `PrepareSelection` in operation.ts overloads

Use `NoInfer<Variables>` consistently in both the constraint and the `Exact<>` parameter,
so TypeScript can cache the `PrepareSelection` result instead of computing it twice.

### Step 3: Verify and measure

- Run `tsc --generateTrace` again and compare type counts
- Run existing type tests (`test/index.test-d.ts`) to verify correctness

## Applied changes (commit b039d98)

Steps 1-2 implemented. Results:
- Type instantiations: 28,685 → 25,511 (-11%)
- SelectionFnOnField: 954 → 545 (-43%)
- ObjectSelection: 276 → 74 (-73%)
- checkVariableDeclaration: ~2112ms → ~1750ms (-17%)
- All 66 tests pass

## Remaining bottleneck: constraint drives recursive expansion

Experiment: replacing `Selection extends PrepareSelection<...>` with
`Selection extends readonly any[]` drops to **283ms / 17,004 types / 120 SelectionFnOnField**.
This proves the **constraint structural comparison** is 85% of the remaining cost.

TypeScript MUST fully expand `PrepareSelection<Query, Vars>` (including all reachable
sub-types) to structurally compare the user's selection against it. This is needed because
the constraint provides **contextual typing** for callback parameters like `$` in
`Media: $ => $(...)`.

A "shallow" constraint that avoids recursion was prototyped but breaks contextual typing
for nested `$` parameters — TypeScript uses the constraint type for first-pass contextual
typing, and a shallow dollar with `selection: any` makes inner `$` parameters `any`.

### Potential further approaches (not yet implemented)

1. **Schema-level pre-computation**: Pre-compute `PrepareSelection` for all types at
   schema definition time (in the generated `.d.ts`), avoiding repeated computation.

2. **Depth-limited constraint**: Use full `PrepareSelection` for depth 0-1 and `any` for
   deeper levels. Would cover most use cases but add type complexity.

3. **TypeScript compiler improvements**: The TS team has been working on deferred type
   resolution. Future TS versions may resolve interface member types more lazily.

## Files modified

- `packages/core/src/types/prepare.ts` — removed eager PrepareSelection from SelectionDollar args
- `packages/core/src/types/dollar.ts` — SelectionDollar takes Type+Variables, defers PrepareSelection
- `packages/core/src/types/operation.ts` — unified NoInfer<Variables> in constraint and parameter
