import type { Argument } from './arg'
import type { DirectiveInput } from './directive'
import type { SelectionContext } from './select'
import { Variable } from './variable'

export interface SelectionDollarFunction<Var extends DollarPayload> {
  (
    selection: SelectionContext<Var>,
    directive?: Array<DirectiveInput>
  ): DollarContext<SelectionContext<Var>>

  (
    arg: Argument,
    selection: SelectionContext<Var>,
    directive?: Array<DirectiveInput>
  ): DollarContext<SelectionContext<Var>>
}

export interface VariableDollarFunction {
  (
    args: string,
    directive: Array<DirectiveInput>
  ): DollarContext<string>
}

export type DollarPayload = Record<string, Variable<string>>

export type SelectionDollar<Var extends DollarPayload> = SelectionDollarFunction<Var> & Var
export type DirectiveDollar<Var extends DollarPayload> = Var
export type VariableDollar = VariableDollarFunction

export class DollarContext<T> {
  content: T
  args: Argument
  directives: Array<DirectiveInput>
  constructor(content: T, args: Argument, directives: Array<DirectiveInput>) {
    this.content = content
    this.args = args
    this.directives = directives
  }
}

export function initSelectionDollar<T extends DollarPayload>(): SelectionDollar<T> {
  return initFuncDollar() as SelectionDollar<T>
}
export function initDirectiveDollar<T extends DollarPayload>(): DirectiveDollar<T> {
  return new Proxy(
    {},
    {
      get(_target, key: string) {
        return new Variable(key)
      },
    },
  ) as DirectiveDollar<T>
}
export function initVariableDollar(): VariableDollar {
  return initFuncDollar() as VariableDollar
}

function initFuncDollar() {
  return new Proxy(
    (...args: any[]) => {
      if (args.length === 1) {
        const [content] = args
        return new DollarContext(content, {}, [])
      }
      if (args.length === 2) {
        if (
          typeof args[0] === 'string'
          || typeof args[0] === 'boolean'
          || typeof args[0] === 'function'
          || Array.isArray(args[0])
        ) {
          const [content, directive] = args
          return new DollarContext(content, {}, directive)
        }
        // arg, content
        const [arg, content] = args
        return new DollarContext(content, arg, [])
      }
      if (args.length === 3) {
        const [arg, content, directive] = args
        return new DollarContext(content, arg, directive)
      }
      throw new Error('Invalid arguments length')
    },
    {
      get(_target, key: string) {
        return new Variable(key)
      },
    },
  )
}
