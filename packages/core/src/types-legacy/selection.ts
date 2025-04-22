import type { Field, ResOf, TypeObject } from '../schema'
import type { PrepareSelectionArgument } from './argument'
import type { DollarPackage, DollarPayload, InlineFragmentDollar, SelectionSetDollar } from './dollar'

export type PrepareSelectionField<
  T extends TypeObject<string, any, any>,
> = WithAlias<keyof {
  [K in keyof T['Fields'] as true extends PrepareSelectionSetSimple<T['Fields'][K]> ? K : never]: true
} | '__typename'>

export type PrepareSelectionObject<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> = PrepareSelectionObjectForFields<T, Variables> & PrepareSelectionObjectForInlineFragment<T, Variables>

export type PrepareSelectionObjectForFields<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> = T['Fields'] extends Record<string, never>
  ? { [K in '__typename' as WithAlias<K>]?: true }
  : { [K in '__typename' as WithAlias<K>]?: true }
    & { [K in keyof T['Fields'] as WithAlias<K>]?: PrepareField<T['Fields'][K], Variables> }
export type PrepareField<
  T extends Field<string, any, any>,
  Variables extends DollarPayload,
> = PrepareSelectionSetSimple<T> | ((
  $: SelectionSetDollar<T, Variables>
) => DollarPackage<PrepareFieldResult<T, Variables>, boolean>)
export type PrepareFieldResult<
  T extends Field<string, any, any>,
  Variables extends DollarPayload,
> = IsTypeObjectKeys<T> extends true
  ? ResTypeOf<T['Return']> extends TypeObject<string, any, any>
    ? PrepareSelectionSetComplex<ResTypeOf<T['Return']>, Variables>
    : never
  : true

export type PrepareSelectionObjectForInlineFragment<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> = T['Types'] extends Record<string, never>
  ? {
      '...'?: PrepareInlineFragment<T, Variables>
    }
  : {
      [K in (T['Name'] | keyof T['Types']) as K extends T['Name']
        ? '...' : `... on ${K & string}`]?:
      K extends T['Name']
        ? PrepareInlineFragment<T, Variables>
        : PrepareInlineFragment<T['Types'][K], Variables>
    }
export type PrepareInlineFragment<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> = (
  $: InlineFragmentDollar<T, Variables>
) => DollarPackage<PrepareSelectionSetComplex<T, Variables>, boolean>

export type PrepareSelectionSetComplex<
  T extends TypeObject<string, any, any>,
  Variables extends DollarPayload,
> =
  | PrepareSelectionField<T>[]
  | [...PrepareSelectionField<T>[], PrepareSelectionObject<T, Variables>]

export type PrepareOperationSelectionSet<
  T extends TypeObject<string, any, any> | undefined,
  Variables,
> = T extends TypeObject<string, any, any>
  ? Variables extends DollarPayload
    ? PrepareSelectionSetComplex<T, Variables>
    : PrepareSelectionSetComplex<T, Record<string, never>>
  : []

/**
 * The field can be simply selected, if
 * 1. It has no arguments (or can be no arguments), and
 * 2. It has no subfields (not a TypeObject)
 */
export type PrepareSelectionSetSimple<
  T extends Field<string, any, any>,
> = IsRequiredArguments<T> extends false
  ? IsTypeObjectKeys<T> extends true
    ? never
    : true
  : never

export type IsRequiredArguments<
  T extends Field<string, any, any>,
> = Record<string, never> extends PrepareSelectionArgument<T['Argument']>
  ? false
  : true
export type IsHasArguments<
  T extends Field<string, any, any>,
> = PrepareSelectionArgument<T['Argument']> extends Record<string, never>
  ? false
  : true
export type IsTypeObjectKeys<
  T extends Field<string, any, any>,
> = ResTypeOf<T['Return']> extends TypeObject<string, any, any>
  ? true
  : false

type ResTypeOf<T extends ResOf<any, string>> =
  NonNullable<T> extends Array<infer U>
    ? ResTypeOf<U>
    : NonNullable<T>

type WithAlias<
  FieldName,
  AliasName = string,
> = FieldName extends string
  ? AliasName extends string
    ? `${AliasName}:${FieldName}` | FieldName
    : never
  : never
