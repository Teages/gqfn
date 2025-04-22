import type { UserSchemaTypes } from '../schema'
import type { EnumFunction } from './enum'
import type { GraphQueryFunctionFragment } from './fragment'
import type { GraphQueryFunctionCore } from './operation'
import type { GraphQueryFunctionPartial } from './partial'

export interface GraphQueryFunction<
  Schema extends UserSchemaTypes,
> extends GraphQueryFunctionCore<Schema> {
  gqfn: GraphQueryFunctionCore<Schema>
  enum: EnumFunction
  fragment: GraphQueryFunctionFragment<Schema>
  partial: GraphQueryFunctionPartial<Schema>
}

export type { ResultOf, TypedDocumentNode, VariablesOf } from './document'
export type { RequireOperationPartialData } from './partial'
