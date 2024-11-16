import { Kind, parseConstValue, parseType, type VariableDefinitionNode } from 'graphql'
import { DirectivesSymbol, parseDirective } from './directive'
import { type DollarPackage, initVariableDefinitionDollar, type VariableDefinitionDollarFunction } from './dollar'

export type VariableDefinitionDollarPackage<T extends string> = ($: VariableDefinitionDollarFunction) => DollarPackage<T>
export type VariableDefinition<T extends string> = Record<string, T | VariableDefinitionDollarPackage<T>>

const VariableTypeSymbol = Symbol.for('@gqfn/core:VariableType')
export class Variable<T extends string> {
  [VariableTypeSymbol]?: T

  #name: string
  constructor(name: string) {
    this.#name = name
  }

  get name() {
    return this.#name
  }
}

export type PrepareVariables<
  T extends VariableDefinition<string>,
> = {
  [K in keyof T]: T[K] extends VariableDefinitionDollarPackage<infer U>
    ? U extends `${infer Type} = ${infer _Default}`
      ? Variable<Type>
      : Variable<U>
    : T[K] extends string
      ? T[K] extends `${infer Type} = ${infer _Default}`
        ? Variable<Type>
        : Variable<T[K]>
      : never
}

export function parseVariables(
  defs: VariableDefinition<string>,
): VariableDefinitionNode[] {
  return Object.entries(defs).map(([name, def]) => {
    const res = typeof def === 'function'
      ? def(initVariableDefinitionDollar())
      : { content: def, [DirectivesSymbol]: undefined }
    const content = res.content
    const directives = res[DirectivesSymbol]

    const [type, defaultValue] = content.split('=').map(s => s.trim())

    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: { kind: Kind.NAME, value: name },
      },
      type: parseType(type, { noLocation: true }),
      defaultValue: defaultValue
        ? parseConstValue(defaultValue, { noLocation: true })
        : undefined,
      directives: parseDirective(directives, true),
    }
  })
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('Variable', () => {
    expect(new Variable('hi').name).toBe('hi')
    expect(new Variable('hi')[VariableTypeSymbol]).toBe(undefined)
  })

  it('parseVariables', () => {
    expect(parseVariables({ username: 'String!' })).toMatchObject([{
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: { kind: Kind.NAME, value: 'username' },
      },
      type: {
        kind: Kind.NON_NULL_TYPE,
        type: {
          kind: Kind.NAMED_TYPE,
          name: { kind: Kind.NAME, value: 'String' },
        },
      },
      defaultValue: undefined,
      directives: [],
    }])
    expect(parseVariables({ username: 'String = "admin"' })).toMatchObject([{
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: { kind: Kind.NAME, value: 'username' },
      },
      type: {
        kind: Kind.NAMED_TYPE,
        name: { kind: Kind.NAME, value: 'String' },
      },
      defaultValue: { kind: Kind.STRING, block: false, value: 'admin' },
      directives: [],
    }])
    expect(parseVariables({ username: $ => $('String!') })).toMatchObject([{
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: { kind: Kind.NAME, value: 'username' },
      },
      type: {
        kind: Kind.NON_NULL_TYPE,
        type: {
          kind: Kind.NAMED_TYPE,
          name: { kind: Kind.NAME, value: 'String' },
        },
      },
      defaultValue: undefined,
      directives: [],
    }])
    expect(parseVariables({
      username: $ => $('String!').withDirective(
        ['@ignore', { if: true }],
      ),
    })).toMatchObject([{
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: { kind: Kind.NAME, value: 'username' },
      },
      type: {
        kind: Kind.NON_NULL_TYPE,
        type: {
          kind: Kind.NAMED_TYPE,
          name: { kind: Kind.NAME, value: 'String' },
        },
      },
      defaultValue: undefined,
      directives: [{
        kind: Kind.DIRECTIVE,
        name: { kind: Kind.NAME, value: 'ignore' },
        arguments: [{
          kind: Kind.ARGUMENT,
          value: { kind: Kind.BOOLEAN, value: true },
          name: { kind: Kind.NAME, value: 'if' },
        }],
      }],
    }])
  })
}
