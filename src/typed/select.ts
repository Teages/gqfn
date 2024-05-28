import type { Field, TypeObject } from '../schema'
import type { ArrayMayFollowItem, EmptyRecord, MaybeArray, RecordAssign } from '../utils/object'
import type { Trim } from '../utils/string'
import type { ProvideSelectionArgument } from './argument'
import type { DollarContext, SelectionDollar } from './dollar'

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
  ProvideSimpleSelectionKeys<T>,
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
  ? T['Return'] extends MaybeArray<TypeObject<string, any, any>>
    ? never
    : true
  : never

export type ProvideSelectionField<
  T extends Field<string, any, any>,
  Vars extends Record<string, any>,
> = (
  EmptyRecord extends ProvideSelectionArgument<T['Argument']>
    ? ProvideSelectionFieldContext<T, Vars>
    : never
) | (
  /**
   * The field can be selected with arguments, if it has arguments
   */
  (
    $: SelectionDollar<T, Vars>,
  ) => DollarContext<ProvideSelectionFieldContext<T, Vars>, boolean>
)

export type ProvideSelectionFieldContext<
  T extends Field<string, any, any>,
  Vars extends Record<string, any>,
> = IsNonTypeObjectKeys<T> extends true
  ? true
  : T['Return'] extends MaybeArray<infer U extends TypeObject<string, any, any>>
    ? ProvideTypeSelection<U, Vars>
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
> = {
  [K in keyof T['Fields']]?: ProvideSelectionField<T['Fields'][K], Vars>
}

export type ProvideTypeSelectionObjectInlineFragment<
  T extends TypeObject<string, any, any>,
  Vars extends Record<string, any>,
> = T['Types'] extends EmptyRecord
  ? {
      '...'?: ProvideTypeSelection<T, Vars>
    }
  : {
      [K in (T['Name'] | keyof T['Types']) as
      K extends T['Name'] ? '...' : `... on ${K & string}`]?: K extends T['Name']
        ? ProvideTypeSelection<T, Vars>
        : ProvideTypeSelection<T['Types'][K], Vars>
    }

export type IsNonTypeObjectKeys<T extends Field<string, any, any>> =
  T['Return'] extends MaybeArray<TypeObject<string, any, any>>
    ? false
    : true

// type WithAlias<
//   FieldName,
//   AliasName = string,
// > = FieldName extends string
//   ? AliasName extends string
//     ? `${AliasName}:${FieldName}` | FieldName
//     : never
//   : never

// type DecodeAlias<
//   T extends string,
// > = T extends `${infer Alias}:${infer Field}`
//   ? { alias: Trim<Alias>, field: Trim<Field> }
//   : { alias: T, field: T }
