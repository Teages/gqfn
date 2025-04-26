import type {
  EnumFunction as RawEnumFunction,
  GraphQueryFunction as RawGraphQueryFunction,
  GraphQueryFunctionCore as RawGraphQueryFunctionCore,
  GraphQueryFunctionFragment as RawGraphQueryFunctionFragment,
  GraphQueryPartial as RawGraphQueryPartial,
} from './runtime'
import type { Schemas } from './schema'
import type { DefineSchema, GraphQueryFunction } from './types'
import { createGQFn, gqfn as raw } from './runtime'

export type { RawGraphQueryFunction }
export type { Schemas } from './schema'
export type { RequireOperationPartialData } from './types'
export type { ResultOf, TypedDocumentNode, VariablesOf } from './types'

/** @deprecated Unknown schema */
export interface UnknownSchema extends RawGraphQueryFunctionCore {
  /** @deprecated Unknown schema */
  gqfn: RawGraphQueryFunctionCore
  /** @deprecated Unknown schema */
  enum: RawEnumFunction
  /** @deprecated Unknown schema */
  fragment: RawGraphQueryFunctionFragment
  /** @deprecated Unknown schema */
  partial: RawGraphQueryPartial
}

export { raw }

export function useSchema(): UnknownSchema
export function useSchema<T extends DefineSchema<any>>(schema: T): GraphQueryFunction<T>
export function useSchema<T extends keyof Schemas>(url: T): GraphQueryFunction<Schemas[T]>
export function useSchema<T extends string>(url: T): UnknownSchema
export function useSchema<T extends string | DefineSchema<any> = string>(_url?: T) {
  return createGQFn() as any
}
