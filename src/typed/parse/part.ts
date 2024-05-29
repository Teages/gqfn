import type { EmptyRecord } from '../../utils/object'

const TypeSymbol = Symbol('Type')

export interface QueryPartType<_Type> {
  [TypeSymbol]: _Type
}

export type RequireQueryPart<T extends QueryPartType<any>> =
  T extends QueryPartType<infer _Type> ? _Type : never

export type ParseQueryPart<Selection> =
  Selection extends []
    ? EmptyRecord
    : Selection extends Array<infer Item extends string>
      ? { [K in Item]: true }
      : Selection extends [infer Follow extends Record<string, any>]
        ? Follow
        : Selection extends [...Array<infer Item extends string>, infer Follow]
          ? { [K in Item]: true } & Follow
          : never
