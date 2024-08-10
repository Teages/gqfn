import type { Field, ResOf, TypeObject } from '../schema'
import type { ArrayMayFollowItem, EmptyRecord, RecordAssign } from '../utils/object'
import type { ProvideSelectionArgument } from './argument'
import type { DollarContext, InlineFragmentDollar, SelectionDollar } from './dollar'

export type ProvideOperationSelection<
  T extends TypeObject<string, any, any> | undefined,
  Vars extends Record<string, any>,
> = T extends TypeObject<string, any, any>
  ? ProvideTypeSelection<T, Vars>
  : [EmptyRecord]

export type ProvideTypeSelection<
  T extends TypeObject<string, any, any>,
  Vars extends Record<string, any>,
> = ArrayMayFollowItem<
  WithAlias<ProvideSimpleSelectionKeys<T>>,
  ProvideTypeSelectionObject<T, Vars>
>

export type ProvideSimpleSelectionKeys<
  T extends TypeObject<string, any, any>,
> = keyof {
  [K in keyof T['Fields'] as true extends CanFieldBeSimplySelected<T['Fields'][K]> ? K : never]: true
} | '__typename'

/**
 * The field can be simply selected, if
 * 1. It has no arguments (or can be no arguments), and
 * 2. It has no subfields (not a TypeObject)
 */
type CanFieldBeSimplySelected<
  T extends Field<string, any, any>,
> = EmptyRecord extends ProvideSelectionArgument<T['Argument']>
  ? ResTypeOf<T['Return']> extends TypeObject<string, any, any>
    ? never
    : true
  : never

export type ProvideSelectionField<
  T extends Field<string, any, any>,
  Vars extends Record<string, any>,
> = (
  EmptyRecord extends ProvideSelectionArgument<T['Argument']>
    ? IsNonTypeObjectKeys<T> extends true
      ? true
      : never
    : never
) | (
  (
    $: SelectionDollar<T, Vars>,
  ) => DollarContext<ProvideSelectionFieldContext<T, Vars>, boolean>
)

export type ProvideSelectionFieldContext<
  T extends Field<string, any, any>,
  Vars extends Record<string, any>,
> = IsNonTypeObjectKeys<T> extends true
  ? true
  : ResTypeOf<T['Return']> extends TypeObject<string, any, any>
    ? ProvideTypeSelection<ResTypeOf<T['Return']>, Vars>
    : never

export type ProvideTypeSelectionObject<
  T extends TypeObject<string, any, any>,
  Vars extends Record<string, any>,
> = RecordAssign<
  ProvideTypeSelectionObjectFields<T, Vars>,
  ProvideTypeSelectionObjectInlineFragment<T, Vars>
>

export type ProvideTypeSelectionObjectFields<
  T extends TypeObject<string, any, any>,
  Vars extends Record<string, any>,
> = T['Fields'] extends EmptyRecord
  ? { [K in '__typename' as WithAlias<K>]?: true }
  : RecordAssign<{
    [K in '__typename' as WithAlias<K>]?: true
  }, {
      [K in keyof T['Fields'] as WithAlias<K>]?: ProvideSelectionField<T['Fields'][K], Vars>
    }>

export type ProvideTypeSelectionObjectInlineFragment<
  T extends TypeObject<string, any, any>,
  Vars extends Record<string, any>,
> = T['Types'] extends EmptyRecord
  ? {
      '...'?: ProvideInlineFragment<T, Vars>
    }
  : {
      [K in (T['Name'] | keyof T['Types']) as K extends T['Name']
        ? '...' : `... on ${K & string}`]?:
      K extends T['Name']
        ? ProvideInlineFragment<T, Vars>
        : ProvideInlineFragment<T['Types'][K], Vars>
    }

type ProvideInlineFragment<
  T extends TypeObject<string, any, any>,
  Vars extends Record<string, any>,
> = (
  $: InlineFragmentDollar<T, Vars>,
) => DollarContext<ProvideTypeSelection<T, Vars>, boolean>

export type IsNonTypeObjectKeys<T extends Field<string, any, any>> =
  ResTypeOf<T['Return']> extends TypeObject<string, any, any>
    ? false
    : true

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
