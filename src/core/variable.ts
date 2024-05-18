import { Kind, parseConstValue, parseType } from 'graphql'
import type { VariableDefinitionNode } from 'graphql'
import type { AcceptDirective } from './directive'
import { parseDirective } from './directive'

const VariableDefineSymbol = Symbol('VariableType')

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
  T extends Record<string, AcceptDirective<string>>,
> = {
  [K in keyof T]: T[K] extends AcceptDirective<infer Value extends string>
    ? Value extends `${infer Type} = ${infer _Default}`
      ? Variable<Type>
      : Variable<Value>
    : never
}

export function parseVariables(
  vars: Record<string, AcceptDirective<string>>,
): VariableDefinitionNode[] {
  return Object.entries(vars).map(([name, def]) => {
    const { value: defContent, directives } = parseDirective(def, true)

    const [type, defaultValue] = defContent.split('=').map(s => s.trim())

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
      directives,
    } satisfies VariableDefinitionNode
  })
}
