import type { GraphQueryFunction as RawGraphQueryFunction } from './runtime'
import type { Schemas } from './schema'
import type { DefineSchema, GraphQueryFunction } from './types'
import { gqfn as raw } from './runtime'

export type { Schemas } from './schema'
export type { ResultOf, TypedDocumentNode, VariablesOf } from './types'
export type UseSchemaResult<T extends string | DefineSchema<any>> =
  T extends DefineSchema<any>
    ? GraphQueryFunction<T>
    : T extends keyof Schemas
      ? Schemas[T] extends DefineSchema<any>
        ? GraphQueryFunction<Schemas[T]>
        : RawGraphQueryFunction
      : RawGraphQueryFunction

export { raw }
export function useSchema<T extends DefineSchema<any>>(): UseSchemaResult<T>
export function useSchema<T extends string | (keyof Schemas & string)>(url: T): UseSchemaResult<T>
export function useSchema<T extends string | DefineSchema<any> = string>(_url?: T) {
  return raw as any
}
