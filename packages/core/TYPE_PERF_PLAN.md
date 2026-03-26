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

Extract repeated `PrepareSelection<...>` into a helper type alias used once, rather than
computing it separately in both the constraint and the `Exact<>` parameter.

### Step 3: Verify and measure

- Run `tsc --generateTrace` again and compare type counts
- Run existing type tests (`test/index.test-d.ts`) to verify correctness
- Target: <5,000 type instantiations, <500ms check time

## Files to modify

- `packages/core/src/types/prepare.ts` — main refactor target
- `packages/core/src/types/dollar.ts` — add lazy variant of SelectionDollar
- `packages/core/src/types/operation.ts` — deduplicate PrepareSelection
