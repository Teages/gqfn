import type { LoadFromUrl } from '@gqfn/core'
import type { $enum, gqfn, gqp } from '@gqfn/core/runtime'
import type { Schemas } from '@gqfn/core/schema'
import type { GraphQueryFunction, GraphQueryPartial } from '@gqfn/core/types'

export type ExactEndpoints = keyof Schemas
export type Endpoints = string | ExactEndpoints

export type DollarEnum = typeof $enum

export type LoadGQFn<T extends Endpoints> = LoadFromUrl<T> extends undefined
  ? typeof gqfn
  : GraphQueryFunction<NonNullable<LoadFromUrl<T>>>

export type LoadGQP<T extends Endpoints> = LoadFromUrl<T> extends undefined
  ? typeof gqp
  : GraphQueryPartial<NonNullable<LoadFromUrl<T>>>
