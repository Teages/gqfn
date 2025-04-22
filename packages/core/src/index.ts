import type { GraphQueryFunction as RawGraphQueryFunction } from './runtime'
import type { DefineSchema, Schemas, UserSchemaTypes } from './schema'
import type { GraphQueryFunction } from './types-legacy'
import { gqfn } from './runtime'

export type { ResultOf, TypedDocumentNode, VariablesOf } from './types-legacy'

export function createGQFn<T extends UserSchemaTypes>(): GraphQueryFunction<T> {
  return gqfn as unknown as GraphQueryFunction<T>
}

export function useGQFnSchema<T extends string | (keyof Schemas & string)>(url: T): LoadGQFnFromUrl<T>
export function useGQFnSchema<T extends string>(_url: T) {
  return gqfn as any
}

export const rawGQFn = gqfn

export type LoadSchemaFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes | DefineSchema<any>
      ? Schemas[T]
      : never
    : never

export type LoadGQFnFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes | DefineSchema<any>
      ? GraphQueryFunction<Schemas[T]>
      : RawGraphQueryFunction
    : RawGraphQueryFunction
