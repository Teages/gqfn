import type { DeprecateFunctionPrototype } from '../internal/utils'
import type { Argument } from './argument'
import type { DirectiveInput } from './directive'
import type { EnumFunction } from './enum'
import type { SelectionSetDollarPackage, SelectionSetDollarPackageInput } from './selection'
import type { VariableStore } from './variable'
import { DirectivesSymbol } from '../internal/symbol'
import { createEnumFunction } from './enum'
import { Variable } from './variable'

export interface DollarPayload<Variables extends VariableStore> {
  vars: Variables
  enum: EnumFunction
}

export interface SelectionSetDollar<Variables extends VariableStore>
  extends DollarPayload<Variables>, SelectionSetDollarFunction<Variables> {}
interface SelectionSetDollarFunction<Variables extends VariableStore> extends DeprecateFunctionPrototype {
  (
    selection: SelectionSetDollarPackageInput<Variables>
  ): SelectionSetDollarPackage<Variables>

  (
    arg: Argument,
    selection: SelectionSetDollarPackageInput<Variables>
  ): SelectionSetDollarPackage<Variables>
}

export type DirectiveDollar<Variables extends VariableStore> = DollarPayload<Variables>

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

export function initSelectionDollar<Variables extends VariableStore>(): SelectionSetDollar<Variables> {
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

export function initDirectiveDollar<Variables extends VariableStore>(): DirectiveDollar<Variables> {
  return withDollarPayload(Object.create(null)) as DirectiveDollar<Variables>
}

export function initVariableDefinitionDollar(): VariableDefinitionDollar {
  const fn = (def: string) => {
    return new DollarPackage(def, {})
  }
  return fn
}

function withDollarPayload<T extends object>(target: T): T & DollarPayload<VariableStore> {
  const enumFn = createEnumFunction()
  const store = new Proxy(Object.create(null), {
    get: (_target, prop) => {
      if (typeof prop === 'string') {
        return new Variable(prop)
      }
    },
  })

  return new Proxy(target, {
    get: (_target, prop, receiver) => {
      if (prop === 'enum') {
        return enumFn
      }
      if (prop === 'vars') {
        return store
      }

      return Reflect.get(target, prop, receiver)
    },
  }) as T & DollarPayload<VariableStore>
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('initSelectionDollar', () => {
    const $ = initSelectionDollar<{ username: Variable<string> }>()
    expect(typeof $).toBe('function')

    expect($.vars.username).toBeInstanceOf(Variable)
    expect($.vars.username.name).toBe('username')

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
    expect(typeof $).toBe('object')

    expect($.vars.username).toBeInstanceOf(Variable)
    expect($.vars.username.name).toBe('username')
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
