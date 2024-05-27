import type { Argument } from './argument'
import type { DirectiveDollar, DollarPayload } from './dollar'

export type DirectiveInput = [
  `@${string}`,
  Argument,
]
export type DirectiveInputWithDollar<Var extends DollarPayload> = [
  `@${string}`,
  Argument | (($: DirectiveDollar<Var>) => Argument),
]

export type IsSkipDirective<Input extends Array<DirectiveInput>> =
  Input extends Array<[infer Name, infer _Args]>
    ? `@${string}` extends Name
      ? false
      : '@skip' extends Name
        ? true
        : '@include' extends Name
          ? true
          : false
    : false
