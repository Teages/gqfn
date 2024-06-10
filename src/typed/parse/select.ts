import type { EnumType, Field, ScalarType, TypeObject } from '../../schema'
import type { EmptyRecord, Nullable, Values } from '../../utils/object'
import type { DollarContext } from '../dollar'

type ParseSelection<T, SelectionField> =
  SelectionField extends (...args: any) => DollarContext<infer Context, infer WithSkip>
    ?
    | ParseSelectionFieldContext<T, Context>
    | (
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
  T extends TypeObject<string, any, any> | undefined,
  Selection,
> = T extends TypeObject<string, any, any>
  ? Selection extends []
    ? EmptyRecord
    : Selection extends Array<infer Item extends string>
      ? ParseTypeSelectionObject<T, { [K in Item]: true }>
      : Selection extends [infer Follow extends Record<string, any>]
        ? ParseTypeSelectionObject<T, Follow>
        : Selection extends [...Array<infer Item extends string>, infer Follow]
          ? ParseTypeSelectionObject<T, { [K in Item]: true } & Follow>
          : never
  : never

type ParseTypeSelectionObject<
  T extends TypeObject<string, any, any>,
  SelectionObject extends Record<string, any>,
> = Extract<keyof SelectionObject, `... on ${string}` | '...'> extends never
  ? ParseSelectionInlineField<T, SelectionObject>
  : ParseSelectionInlineField<T, Omit<SelectionObject, `... on ${string}` | '...'>>
  & ParseInlineFragment<T, SelectionObject>

type ParseSelectionInlineField<
  T extends TypeObject<string, any, any>,
  SelectionObject extends Record<string, any>,
> = {
  [K in Exclude<
      keyof SelectionObject,
      `... on ${string}` | '...'
    > as ParseSelectionName<K>['Name']
  ]: ParseSelectionName<K>['Field'] extends '__typename'
    ? ParseTypename<T>
    : ParseSelectionField<
        T['Fields'][ParseSelectionName<K>['Field']],
        SelectionObject[K]
      >
}

type ParseInlineFragment<
  T extends TypeObject<string, any, any>,
  SelectionObject,
> = Values<{
  [K in ('...' | `... on ${string & keyof T['Types']}`)]:
  K extends '...'
    ? K extends keyof SelectionObject
      ? ParseInlineFragmentSelection<T, SelectionObject[K]>
      : never
    : K extends `... on ${infer Type}`
      ? K extends keyof SelectionObject
        ? { __typename?: ParseTypename<T['Types'][Type]> } & ParseInlineFragmentSelection<T['Types'][Type], SelectionObject[K]>
        : { __typename?: ParseTypename<T['Types'][Type]> }
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
  null | undefined extends Ret
    ? Nullable<ParseSelectionReturn<NonNullable<Ret>, SelectionField>>
    : Ret extends Array<infer T>
      ? Array<ParseSelectionReturn<T, SelectionField>>
      : ParseSelection<Ret, SelectionField>

type ParseOutput<T> =
  null | undefined extends T
    ? Nullable<ParseOutput<NonNullable<T>>>
    : T extends Array<infer U>
      ? Array<ParseOutput<U>>
      : _ParseOutput<T>

type _ParseOutput<T> =
  T extends ScalarType<string, any, any>
    ? T['Output']
    : T extends EnumType<string, any>
      ? T['Output']
      : unknown

type ParseTypename<T extends TypeObject<string, any, any>> =
  T['Types'] extends EmptyRecord ? T['Name'] : keyof T['Types']

type MaybeEmpty<T extends Record<string, any>> = T | {
  [K in keyof T]: null | undefined
}
