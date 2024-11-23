import type { Argument } from './argument'
import type { DirectiveInput } from './directive'
import type { SelectionSetDollarPackage, SelectionSetDollarPackageInput } from './selection'
import { DirectivesSymbol } from './directive'
import { Variable } from './variable'

export type DollarPayload = Record<string, Variable<string>>

export type SelectionSetDollar<Variables extends DollarPayload> = SelectionSetDollarFunction<Variables> & Variables
interface SelectionSetDollarFunction<Variables extends DollarPayload> {
  (
    selection: SelectionSetDollarPackageInput<Variables>
  ): SelectionSetDollarPackage<Variables>

  (
    arg: Argument,
    selection: SelectionSetDollarPackageInput<Variables>
  ): SelectionSetDollarPackage<Variables>
}

export type DirectiveDollar<Variables extends DollarPayload> = DirectiveDollarFunction & Variables
interface DirectiveDollarFunction {
  (): void
}

export type VariableDefinitionDollar = VariableDefinitionDollarFunction
interface VariableDefinitionDollarFunction {
  (
    def: string
  ): DollarPackage<string>
}

export class DollarPackage<T> {
  content: T
  args: Argument
  [DirectivesSymbol]?: DirectiveInput[]
  constructor(content: T, args: Argument) {
    this.content = content
    this.args = args
  }

  withDirective(...directives: DirectiveInput[]): DollarPackage<T> {
    this[DirectivesSymbol] = this[DirectivesSymbol] || []
    this[DirectivesSymbol].push(...directives)
    return this
  }
}

export function initSelectionDollar<Variables extends DollarPayload>(): SelectionSetDollar<Variables> {
  const fn = (
    ...args: (
      | [selection: SelectionSetDollarPackageInput<Variables>]
      | [arg: Argument, selection: SelectionSetDollarPackageInput<Variables>]
    )
  ): SelectionSetDollarPackage<Variables> => {
    switch (args.length) {
      case 1: {
        const [selection] = args
        return new DollarPackage(selection, {})
      }
      default: { // case 2
        const [arg, selection] = args
        return new DollarPackage(selection, arg)
      }
    }
  }

  return withDollarPayload(fn) as SelectionSetDollar<Variables>
}

export function initDirectiveDollar<T extends DollarPayload>(): DirectiveDollar<T> {
  const fn = () => {}

  return withDollarPayload(fn) as DirectiveDollar<T>
}

export function initVariableDefinitionDollar(): VariableDefinitionDollar {
  const fn = (def: string) => {
    return new DollarPackage(def, {})
  }
  return fn
}

function withDollarPayload<T extends object>(target: T): T & DollarPayload {
  return new Proxy(target, {
    get: (_target, prop) => {
      if (typeof prop === 'string') {
        return new Variable(prop)
      }
    },
  }) as T & DollarPayload
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('initSelectionDollar', () => {
    const $ = initSelectionDollar<{ username: Variable<string> }>()
    expect(typeof $).toBe('function')

    expect($.username).toBeInstanceOf(Variable)
    expect($.username.name).toBe('username')

    expect($(true)).toBeInstanceOf(DollarPackage)
    expect($(true).args).toMatchObject({})
    expect($(true).content).toBe(true)

    expect($({ name: 'world' }, ['hello'])).toBeInstanceOf(DollarPackage)
    expect($({ name: 'world' }, ['hello']).args).toMatchObject({ name: 'world' })
    expect($({ name: 'world' }, ['hello']).content).toMatchObject(['hello'])

    expect($(true).withDirective(['@include', { if: true }])[DirectivesSymbol])
      .toMatchObject([
        ['@include', { if: true }],
      ])
  })

  it('initDirectiveDollar', () => {
    const $ = initDirectiveDollar<{ username: Variable<string> }>()
    expect(typeof $).toBe('function')

    expect($.username).toBeInstanceOf(Variable)
    expect($.username.name).toBe('username')
  })

  it('initVariableDefinitionDollar', () => {
    const $ = initVariableDefinitionDollar()
    expect(typeof $).toBe('function')

    expect($('String!')).toBeInstanceOf(DollarPackage)
    expect($('String!').args).toMatchObject({})
    expect($('String!').content).toBe('String!')

    expect($('Int!').withDirective(['@ignore', { if: true }])[DirectivesSymbol])
      .toMatchObject([
        ['@ignore', { if: true }],
      ])
  })
}
