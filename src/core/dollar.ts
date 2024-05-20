import type { Argument } from './arg'
import type { DirectiveInput } from './directive'
import type { SelectionContext } from './select'
import { Variable } from './variable'

export interface FieldDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>

  (
    field: string,
    directive?: Array<DirectiveInput>
  ): DollarContext<string>

  (
    arg: Argument,
    field: string,
    directive?: Array<DirectiveInput>
  ): DollarContext<string>
}
export interface SelectionDollarFunction<Var extends DollarPayload> {
  <T extends string>(enumValue: T): DollarEnum<T>

  (
    selection: SelectionContext<Var>,
    directive: Array<DirectiveInput>
  ): DollarContext<SelectionContext<Var>>

  (
    arg: Argument,
    selection: SelectionContext<Var>,
    directive?: Array<DirectiveInput>
  ): DollarContext<SelectionContext<Var>>
}
export interface DirectiveDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>
}
export interface VariableDollarFunction {
  <T extends string>(enumValue: T): DollarEnum<T>
  (
    args: string,
    directive: Array<DirectiveInput>
  ): DollarContext<string>
}

export type DollarPayload = Record<string, Variable<string>>

export type FieldDollar<Var extends DollarPayload> = FieldDollarFunction & Var
export type SelectionDollar<Var extends DollarPayload> = SelectionDollarFunction<Var> & Var
export type DirectiveDollar<Var extends DollarPayload> = DirectiveDollarFunction & Var
export type VariableDollar = VariableDollarFunction

export class DollarEnum<T extends string> {
  #value: T
  constructor(value: T) { this.#value = value }
  get value() {
    return this.#value
  }
}

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

export function initFieldDollar<T extends DollarPayload>(): FieldDollar<T> {
  return initDollar() as FieldDollar<T>
}
export function initSelectionDollar<T extends DollarPayload>(): SelectionDollar<T> {
  return initDollar() as SelectionDollar<T>
}
export function initDirectiveDollar<T extends DollarPayload>(): DirectiveDollar<T> {
  return initDollar() as DirectiveDollar<T>
}
export function initVariableDollar(): VariableDollar {
  return initDollar() as VariableDollar
}

function initDollar() {
  return new Proxy(
    (...args: any[]) => {
      if (args.length === 1) {
        return new DollarEnum(args[0])
      }
      if (args.length === 2) {
        if (
          typeof args[0] === 'string'
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
