import { Kind, parseConstValue, parseType } from 'graphql'
import type { VariableDefinitionNode } from 'graphql'
import type { DirectiveInput } from './directive'
import { parseDirective } from './directive'
import { type DollarContext, type VariableDollar, initVariableDollar } from './dollar'

const VariableDefineSymbol = Symbol('VariableType')

export type ProvideVariable<T extends string> =
  Record<string, T | (($: VariableDollar) => DollarContext<T>)>

export class Variable<T extends string> {
  [VariableDefineSymbol]?: T
  #name: string
  constructor(name: string) {
    this.#name = name
  }

  get name() {
    return this.#name
  }
}

export type PrepareVariables<
  T extends ProvideVariable<string>,
> = {
  [K in keyof T]: T[K] extends ProvideVariable<infer Value extends string>
    ? Value extends `${infer Type} = ${infer _Default}`
      ? Variable<Type>
      : Variable<Value>
    : never
}

export function parseVariables(
  vars: ProvideVariable<string>,
): VariableDefinitionNode[] {
  return Object.entries(vars).map(([name, def]) => {
    const { content, directives } = typeof def === 'function'
      ? def(initVariableDollar())
      : {
          content: def,
          directives: [] as Array<DirectiveInput>,
        }

    const [type, defaultValue] = content.split('=').map(s => s.trim())

    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: {
        kind: Kind.VARIABLE,
        name: {
          kind: Kind.NAME,
          value: name,
        },
      },
      type: parseType(type, { noLocation: true }),
      defaultValue: defaultValue
        ? parseConstValue(defaultValue, { noLocation: true })
        : undefined,
      directives: parseDirective(directives, true),
    } satisfies VariableDefinitionNode
  })
}
