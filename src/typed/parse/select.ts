import type { Enum, Field, Scalar, TypeObject } from '../../schema'
import type { EmptyRecord, Nullable, Values } from '../../utils/object'
import type { DollarContext } from '../dollar'

type ParseSelection<T, SelectionField> =
  SelectionField extends (...args: any) => DollarContext<infer Context, infer WithSkip>
    ? ParseSelectionFieldContext<T, Context> | (
      true extends WithSkip ? undefined | null : never
    )
    : ParseSelectionFieldContext<T, SelectionField>

type ParseSelectionFieldContext<T, SelectionField> =
  SelectionField extends true
    ? ParseOutput<T>
    : T extends TypeObject<string, any, any>
      ? ParseTypeSelection<T, SelectionField>
      : never

export type ParseTypeSelection<
  T extends TypeObject<string, any, any>,
  Selection,
> = Selection extends []
  ? EmptyRecord
  : Selection extends Array<infer Item extends string>
    ? ParseTypeSelectionObject<T, { [K in Item]: true }>
    : Selection extends [infer Follow extends Record<string, any>]
      ? ParseTypeSelectionObject<T, Follow>
      : Selection extends [...Array<infer Item extends string>, infer Follow]
        ? ParseTypeSelectionObject<T, { [K in Item]: true } & Follow>
        : never

type ParseTypeSelectionObject<
  T extends TypeObject<string, any, any>,
  SelectionObject extends Record<string, any>,
> = Extract<keyof SelectionObject, `... on ${string}` | '...'> extends never
  ? ParseSelectionInlineField<T, SelectionObject>
  : ParseSelectionInlineField<T, Omit<SelectionObject, `... on ${string}` | '...'>>
  & ParseInlineFragment<T, Pick<SelectionObject, `... on ${string}` | '...'>>

type ParseSelectionInlineField<
  T extends TypeObject<string, any, any>,
  SelectionObject extends Record<string, any>,
> = {
  [K in Exclude<
      keyof SelectionObject,
      `... on ${string}`
    > as ParseSelectionName<K>['Name']
  ]: ParseSelectionName<K>['Field'] extends '__typename'
    ? T['Types'] extends EmptyRecord ? T['Name'] : keyof T['Types']
    : ParseSelectionField<
        T['Fields'][ParseSelectionName<K>['Field']],
        SelectionObject[K]
      >
}

type ParseInlineFragment<
  T extends TypeObject<string, any, any>,
  SelectionObject,
> = Values<{
  [K in keyof SelectionObject]: K extends '...'
    ? ParseInlineFragmentSelection<T, SelectionObject[K]>
    : K extends `... on ${infer Type}`
      ? ParseInlineFragmentSelection<T['Types'][Type], SelectionObject[K]>
      : never
}>

type ParseInlineFragmentSelection<
  T extends TypeObject<string, any, any>,
  SelectionField,
> = null | undefined extends ParseSelection<T, SelectionField>
  ? MaybeEmpty<NonNullable<ParseSelection<T, SelectionField>>>
  : ParseSelection<T, SelectionField>

type ParseSelectionName<T> =
  T extends `${infer Name}:${infer Field}`
    ? { Field: Field, Name: Name }
    : { Field: T, Name: T }

type ParseSelectionField<
  TField,
  SelectionField,
> = TField extends Field<string, infer Ret, any>
  ? ParseSelectionReturn<Ret, SelectionField>
  : never

type ParseSelectionReturn<Ret, SelectionField> =
  Ret extends never
    ? never
    : Ret extends Array<infer T>
      ? Array<ParseSelectionReturn<T, SelectionField>>
      : null extends Ret
        ? Nullable<ParseSelectionReturn<NonNullable<Ret>, SelectionField>>
        : ParseSelection<Ret, SelectionField>

type ParseOutput<T> =
  T extends Scalar<string, any, any>
    ? T['Output']
    : T extends Enum<string, any>
      ? T['Output']
      : unknown

type MaybeEmpty<T extends Record<string, any>> = T | {
  [K in keyof T]: null | undefined
}
