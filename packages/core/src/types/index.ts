import type { DefineSchema } from './define'
import type { EnumFunction } from './enum'
import type { GraphQueryFunctionFragment } from './fragment'
import type { GraphQueryFunctionCore } from './operation'
import type { GraphQueryFunctionPartial } from './partial'

export type * from './define'
export type { ResultOf, TypedDocumentNode, VariablesOf } from './document'
export type { RequireOperationPartialData } from './partial'
export type { SchemaRequire } from './utils'

export interface GraphQueryFunction<
  Schema extends DefineSchema<any>,
> extends GraphQueryFunctionCore<Schema> {
  gqfn: GraphQueryFunctionCore<Schema>
  enum: EnumFunction
  fragment: GraphQueryFunctionFragment<Schema>
  partial: GraphQueryFunctionPartial<Schema>
}
