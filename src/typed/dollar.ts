import type { Argument } from './argument'
import type { DirectiveInput } from './directive'

const DollarContextWithSkipSymbol = Symbol('')

export interface DollarContext<T, WithSkip extends boolean = false> {
  content: T
  args: Argument
  directives: Array<DirectiveInput>

  // The method is never actually implemented
  [DollarContextWithSkipSymbol]?: () => WithSkip
}

export type DollarPayload = Record<string, unknown>
interface DollarEnum<T extends string> {
  readonly value: T
}

interface VariableDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>
  <T extends string>(
    args: T,
    directive: Array<DirectiveInput>
  ): DollarContext<T>
}

interface DirectiveDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>
}

export type VariableDollar = VariableDollarFunction
export type DirectiveDollar<Var extends DollarPayload> = DirectiveDollarFunction & Var
