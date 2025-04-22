import type { Expand, FlatRecord, UnionToIntersection, Values } from '../../internal/utils'
import type { EnumType, Field, ScalarType, TypeObject } from '../../schema'
import type { DollarPackage } from '../dollar'

export type ParseSelectionSet<
  T extends TypeObject<string, any, any> | undefined,
  Selection,
> = T extends TypeObject<string, any, any>
  ? Expand<ParseSelectionSetComplex<T, Selection>>
  : never

export type ParseSelectionSetComplex<
  T extends TypeObject<string, any, any>,
  Selection,
> = Selection extends Array<any>
  ? ParseSelectionObject<T, AnalyzedSelectionSetComplex<Selection>>
  : never

export type ParseSelectionObject<
  T extends TypeObject<string, any, any>,
  SelectionObject,
> = SelectionObject extends Record<string, any>
  ? Extract<keyof SelectionObject, `... on ${string}` | '...'> extends never
    ? ParseSelectionObjectForFields<T, SelectionObject>
    : ParseSelectionObjectForFields<T, OmitSelectionObjectForInlineFragment<SelectionObject>>
      & ParseSelectionObjectForInlineFragment<T, PickSelectionObjectForInlineFragment<SelectionObject>>
  : never
type PickSelectionObjectForInlineFragment<T> = {
  [K in keyof T]: K extends '...' | `... on ${string}`
    ? T[K]
    : never
}
type OmitSelectionObjectForInlineFragment<T> = Omit<T, '...' | `... on ${string}`>

export type ParseSelectionObjectForFields<
  T extends TypeObject<string, any, any>,
  SelectionObject extends Record<string, any>,
> = {
  [K in keyof SelectionObject as ParseSelectionName<K>['Name']]:
  ParseSelectionName<K>['Field'] extends '__typename'
    ? ParseTypename<T>
    : ParseSelectionObjectForField<T['Fields'][ParseSelectionName<K>['Field']], SelectionObject[K]>
}
type ParseSelectionName<T> =
  T extends `${infer Name}:${infer Field}`
    ? { Field: Field, Name: Name }
    : { Field: T, Name: T }
type ParseTypename<T extends TypeObject<string, any, any>> =
  T['Types'] extends Record<string, never> ? T['Name'] : keyof T['Types']
type ParseSelectionObjectForField<T, Selection> =
  T extends Field<string, infer Ret, any>
    ? ParseFieldReturn<Ret, Selection>
    : never

type ParseFieldReturn<Ret, Selection> =
  null | undefined extends Ret
    ? ParseFieldReturn<NonNullable<Ret>, Selection> | null | undefined
    : Ret extends Array<infer T>
      ? Array<ParseFieldReturn<T, Selection>>
      : ParseSelectionObjectItem<Ret, Selection>

type ParseSelectionObjectItem<Ret, Selection> =
  Selection extends (...args: any) => DollarPackage<infer Context, infer IsOptional>
    ?
    | ParseSelectionObjectItemContext<Ret, Context>
    | (true extends IsOptional ? (undefined | null) : never)
    : ParseSelectionObjectItemContext<Ret, Selection>
type ParseSelectionObjectItemContext<Ret, Selection> =
  Selection extends true
    ? ParseOutput<Ret>
    : Ret extends TypeObject<string, any, any>
      ? ParseSelectionSetComplex<Ret, Selection>
      : never

export type ParseSelectionObjectForInlineFragment<
  T extends TypeObject<string, any, any>,
  SelectionObject extends Record<string, any>,
> = string extends keyof T['Types']
  ? '...' extends keyof SelectionObject
    ? ParseInlineFragmentReturn<T, SelectionObject['...']>
    : never
  : Values<{
    [K in ('...' | `... on ${string & keyof T['Types']}`)]: K extends '...'
      ? K extends keyof SelectionObject
        ? ParseInlineFragmentReturn<T, SelectionObject['...']>
        : never
      : K extends `... on ${infer Type}`
        ? K extends keyof SelectionObject
          ? { __typename?: ParseTypename<T['Types'][Type]> } & ParseInlineFragmentReturn<T['Types'][Type], SelectionObject[K]>
          : { __typename?: ParseTypename<T['Types'][Type]> }
        : never
  }>
type ParseInlineFragmentReturn<
  T extends TypeObject<string, any, any>,
  SelectionField,
> = SelectionField extends (...args: any) => DollarPackage<infer Context, infer IsOptional>
  ?
  | ParseSelectionSetComplex<T, Context>
  | (true extends IsOptional ? { [K in keyof ParseSelectionSetComplex<T, Context>]: null | undefined } : never)
  : never

/**
 * Make `SelectionSetComplex` to a `SelectionObject`
 */
export type AnalyzedSelectionSetComplex<
  Selection extends Array<any>,
> = FlatRecord<UnionToIntersection<
  Selection extends Array<infer Items>
    ? Items extends string
      ? { [K in Items]: true }
      : Items
    : never
>>

export type ParseOutput<T> =
  null | undefined extends T
    ? ParseOutput<NonNullable<T>> | null | undefined
    : T extends Array<infer U>
      ? Array<ParseOutput<U>>
      : _ParseOutput<T>
type _ParseOutput<T> =
  T extends ScalarType<string, any, any>
    ? T['Output']
    : T extends EnumType<string, any>
      ? T['Output']
      : unknown
