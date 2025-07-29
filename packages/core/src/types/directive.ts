import type { Argument } from './argument'
import type { DirectiveDollar, DollarPayload } from './dollar'

export type DirectiveInput = [
  def: `@${string}`,
  argument: Argument,
]

export type HasSkipDirective<Input extends Array<DirectiveInput>>
  = Input extends Array<[infer Name, infer _Args]>
    ? `@${string}` extends Name
      ? false
      : '@skip' extends Name
        ? true
        : '@include' extends Name
          ? true
          : false
    : false

export type DirectivesInputWithDollar<Variables>
  = Variables extends DollarPayload
    ? ($: DirectiveDollar<Variables>) => Array<DirectiveInput>
    : never
