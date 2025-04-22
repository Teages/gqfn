import type { RelaxedOptional } from '../internal/utils'
import type { Input } from './define'
import type { RequireInputOrVariable } from './utils'

export type Argument = Record<string, unknown>
export type PrepareSelectionArgument<
  T extends Record<string, Input<any, any>>,
> = RelaxedOptional<{
  [K in keyof T]: RequireInputOrVariable<T[K]>
}>
