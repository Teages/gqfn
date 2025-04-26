import type { PrepareSelectionArgument } from './argument'
import type { BaseObject, BaseScalar, BaseType, Field } from './define'
import type { DollarPackage, DollarPayload, SelectionDollar } from './dollar'
import type { TypenameField } from './utils'

export type PrepareSelection<
  T extends BaseType<any, any>,
  Variables extends DollarPayload,
> =
  T extends BaseObject<any, any, any>
    ? ObjectSelection<T, Variables>
    : T extends BaseScalar<any, any, any>
      ? ScalarSelection
      : never

export type ScalarSelection = true
export type ObjectSelection<
  T extends BaseObject<any, any, any>,
  Variables extends DollarPayload,
> =
  | ObjectSelectionSimple<ObjectSelectionContext<T, Variables>>[]
  | [...ObjectSelectionSimple<ObjectSelectionContext<T, Variables>>[], ObjectSelectionContext<T, Variables>]

export type ObjectSelectionSimple<Context> = keyof {
  [K in keyof Context as true extends Context[K] ? K : never]: true
}

export type ObjectSelectionContext<
  T extends BaseObject<any, any, any>,
  Variables extends DollarPayload,
> = ObjectSelectionOnFields<T, Variables> & ObjectSelectionOnInlineFragments<T, Variables>

export type ObjectSelectionOnFields<
  T extends BaseObject<any, any, any>,
  Variables extends DollarPayload,
> = T extends BaseObject<infer Name, infer Fields, any>
  ? ({ [K in keyof Fields as WithAlias<K>]?: SelectionOnField<Fields[K], Variables> }
    & { [K in '__typename' as WithAlias<K>]?: SelectionOnField<TypenameField<Name>, Variables> })
  : never
export type ObjectSelectionOnInlineFragments<
  T extends BaseObject<any, any, any>,
  Variables extends DollarPayload,
> = T extends BaseObject<any, any, infer Implements>
  ? ({ [K in keyof Implements as `... on ${K & string}`]?: SelectionFnOnInlineFragment<Implements[K], Variables> }
    & { '...'?: SelectionFnOnInlineFragment<T, Variables> })
  : never

export type SelectionOnField<
  T extends Field<any, any, any>,
  Variables extends DollarPayload,
> = T extends Field<any, infer Type, infer Arguments>
  ?
  | SelectionSimplyOnField<Type, PrepareSelectionArgument<Arguments>>
  | SelectionFnOnField<Type, PrepareSelectionArgument<Arguments>, Variables>
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
  Variables extends DollarPayload,
> {
  (
    $: SelectionDollar<
      PrepareSelection<Type, Variables>,
      PreparedArguments,
      Variables
    >
  ): DollarPackage<any, any>
}

export type SelectionFnOnInlineFragment<
  T extends BaseObject<any, any, any>,
  Variables extends DollarPayload,
> = (
  $: SelectionDollar<
    ObjectSelection<T, Variables>,
    Record<string, never>,
    Variables
  >
) => DollarPackage<any, any>

export type AliasSpace = ' ' | ''
export type WithAlias<
  FieldName,
  AliasName = string,
> = FieldName extends string
  ? AliasName extends string
    ? `${AliasName}:${AliasSpace}${FieldName}` | FieldName
    : never
  : never
