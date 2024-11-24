import type { GraphQueryFunction as RawGraphQueryFunction } from './runtime'
import type { Schemas, UserSchemaTypes } from './schema'
import type { GraphQueryFunction } from './types'
import { gqfn } from './runtime'

export type { ResultOf, TypedDocumentNode, VariablesOf } from './types'

export function createGQFn<T extends UserSchemaTypes>(): GraphQueryFunction<T> {
  return gqfn as any
}

export function useGQFnSchema<T extends string & keyof Schemas>(url: T): LoadGQFnFromUrl<T>
export function useGQFnSchema<T extends string & keyof Schemas>(_url: T) {
  return gqfn as any
}

export const rawGQFn = gqfn

export type LoadSchemaFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes
      ? Schemas[T]
      : never
    : never

export type LoadGQFnFromUrl<T extends string> =
  T extends keyof Schemas
    ? Schemas[T] extends UserSchemaTypes
      ? GraphQueryFunction<Schemas[T]>
      : RawGraphQueryFunction
    : RawGraphQueryFunction
