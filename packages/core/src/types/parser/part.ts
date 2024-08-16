import type { EmptyRecord, HiddenSymbol } from '../utils/object'

export interface QueryPartType<T> {
  [HiddenSymbol]?: () => T
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
