import type { RelaxedOptional } from '../internal/utils'
import type { ArgOf } from '../schema'
import type { AcceptVariables } from './variable'

export type Argument = Record<string, unknown>
export type PrepareSelectionArgument<
  T extends Record<string, ArgOf<any, string>>,
> = RelaxedOptional<{
  [K in keyof T]: AcceptVariables<T[K]>
}>
