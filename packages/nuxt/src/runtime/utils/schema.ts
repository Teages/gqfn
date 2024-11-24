import type { LoadSchemaFromUrl } from '@gqfn/core'
import type { GraphQueryFunction as RawGraphQueryFunction } from '@gqfn/core/runtime'
import type { DefineSchema, Schemas, UserSchemaTypes } from '@gqfn/core/schema'
import type { GraphQueryFunction } from '@gqfn/core/types'

export type ExactEndpoints = keyof Schemas
export type Endpoints = ExactEndpoints | (string & {})

export type LoadGQFn<T extends Endpoints> = LoadSchemaFromUrl<T> extends UserSchemaTypes | DefineSchema<any>
  ? GraphQueryFunction<LoadSchemaFromUrl<T>>
  : RawGraphQueryFunction
