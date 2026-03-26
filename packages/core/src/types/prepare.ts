import type { PrepareSelectionArgument } from './argument'
import type { BaseObject, BaseScalar, BaseType, Field } from './define'
import type { DollarPackage, SelectionDollar } from './dollar'
import type { ExtractBaseType, TypenameField } from './utils'
import type { VariableStore } from './variable'

export type PrepareSelection<
  T extends BaseType<any, any>,
  Variables extends VariableStore,
>
  = T extends BaseObject<any, any, any>
    ? ObjectSelection<T, Variables>
    : T extends BaseScalar<any, any, any>
      ? ScalarSelection
      : never

export type ScalarSelection = true
export type ObjectSelection<
  T extends BaseObject<any, any, any>,
  Variables extends VariableStore,
>
  = | ObjectSelectionSimple<T>[]
    | [...ObjectSelectionSimple<T>[], ObjectSelectionContext<T, Variables>]

export type ObjectSelectionSimple<
  T extends BaseObject<any, any, any>,
> = T extends BaseObject<infer Name, infer Fields, any>
  ? WithAlias<ScalarFieldKeys<Fields> | '__typename'>
  : never

type ScalarFieldKeys<Fields extends Record<string, Field<any, any>>> = {
  [K in keyof Fields]: Fields[K] extends Field<infer TypeExpr, any>
    ? ExtractBaseType<TypeExpr> extends BaseScalar<any, any, any>
      ? K
      : never
    : never
}[keyof Fields]

export type ObjectSelectionContext<
  T extends BaseObject<any, any, any>,
  Variables extends VariableStore,
> = ObjectSelectionOnFields<T, Variables> & ObjectSelectionOnInlineFragments<T, Variables>

export type ObjectSelectionOnFields<
  T extends BaseObject<any, any, any>,
  Variables extends VariableStore,
> = T extends BaseObject<infer Name, infer Fields, any>
  ? ({ [K in keyof Fields as WithAlias<K>]?: SelectionOnField<Fields[K], Variables> }
    & { [K in '__typename' as WithAlias<K>]?: SelectionOnField<TypenameField<Name>, Variables> })
  : never
export type ObjectSelectionOnInlineFragments<
  T extends BaseObject<any, any, any>,
  Variables extends VariableStore,
> = T extends BaseObject<any, any, infer Implements>
  ? ({ [K in keyof Implements as `... on ${K & string}`]?: SelectionFnOnInlineFragment<Implements[K], Variables> }
    & { '...'?: SelectionFnOnInlineFragment<T, Variables> })
  : never

export type SelectionOnField<
  T extends Field<any, any>,
  Variables extends VariableStore,
> = T extends Field<infer TypeExpr, infer Arguments>
  ? ExtractBaseType<TypeExpr> extends infer BT extends BaseType<any, any>
    ? | SelectionSimplyOnField<BT, PrepareSelectionArgument<Arguments>>
    | SelectionFnOnField<BT, PrepareSelectionArgument<Arguments>, Variables>
    : never
  : never

export type SelectionSimplyOnField<
  Type extends BaseType<any, any>,
  PreparedArguments extends Record<string, any>,
> = Record<string, never> extends PreparedArguments
  ? Type extends BaseScalar<any, any, any>
    ? true
    : never
  : never

export interface SelectionFnOnField<
  Type extends BaseType<any, any>,
  PreparedArguments extends Record<string, any>,
  Variables extends VariableStore,
> {
  (
    $: SelectionDollar<
      Type,
      PreparedArguments,
      Variables
    >
  ): DollarPackage<any, boolean>
}

export type SelectionFnOnInlineFragment<
  T extends BaseObject<any, any, any>,
  Variables extends VariableStore,
> = (
  $: SelectionDollar<
    T,
    Record<string, never>,
    Variables
  >
) => DollarPackage<any, boolean>

export type AliasSpace = ' ' | ''
export type WithAlias<
  FieldName,
  AliasName = string,
> = FieldName extends string
  ? AliasName extends string
    ? `${AliasName}:${AliasSpace}${FieldName}` | FieldName
    : never
  : never
