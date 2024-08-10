import type { Schemas } from '@teages/gqf/schema'
import type { $enum } from '@teages/gqf'
import type { LoadFromUrl } from '@teages/gqf/cli'
import type { GraphQueryFunction, GraphQueryPartial } from '@teages/gqf/typed'
import type { gqf, gqp } from '@teages/gqf/core'

export type ExactEndpoints = keyof Schemas
export type Endpoints = string | ExactEndpoints

export type DollarEnum = typeof $enum

export type LoadGQF<T extends Endpoints> = LoadFromUrl<T> extends undefined
  ? typeof gqf
  : GraphQueryFunction<NonNullable<LoadFromUrl<T>>>

export type LoadGQP<T extends Endpoints> = LoadFromUrl<T> extends undefined
  ? typeof gqp
  : GraphQueryPartial<NonNullable<LoadFromUrl<T>>>
