import type { ArgOf } from '../schema'
import type { RelaxedOptional } from './utils/object'
import type { AcceptVariables } from './variable'

export type Argument = Record<string, unknown>

export type ProvideSelectionArgument<
  T extends Record<string, ArgOf<any, string>>,
> = RelaxedOptional<{
  [K in keyof T]: AcceptVariables<T[K]>
}>
