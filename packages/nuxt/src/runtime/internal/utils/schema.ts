import type { Schemas } from '@gqfn/core/schema'
import type { $enum } from '@gqfn/core'
import type { LoadFromUrl } from '@gqfn/core/cli'
import type { GraphQueryFunction, GraphQueryPartial } from '@gqfn/core/typed'
import type { gqfn, gqp } from '@gqfn/core/core'

export type ExactEndpoints = keyof Schemas
export type Endpoints = string | ExactEndpoints

export type DollarEnum = typeof $enum

export type LoadGQFn<T extends Endpoints> = LoadFromUrl<T> extends undefined
  ? typeof gqfn
  : GraphQueryFunction<NonNullable<LoadFromUrl<T>>>

export type LoadGQP<T extends Endpoints> = LoadFromUrl<T> extends undefined
  ? typeof gqp
  : GraphQueryPartial<NonNullable<LoadFromUrl<T>>>
