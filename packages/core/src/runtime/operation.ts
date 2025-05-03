import type { DocumentNode } from '@0no-co/graphql.web'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { SelectionSetComplex } from './selection'
import type { PrepareVariables, VariableDefinition } from './variable'
import { Kind, OperationTypeNode } from '@0no-co/graphql.web'
import { createDocumentNodeContext } from './context'
import { parseDirective } from './directive'
import { initDirectiveDollar } from './dollar'
import { parseSelectionSetComplex } from './selection'
import { parseVariables } from './variable'

export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`

export interface GraphQueryFunctionCore {
  (
    selection: SelectionSetComplex<Record<string, never>>,
  ): DocumentNode

  (
    name: OperationName,
    selection: SelectionSetComplex<Record<string, never>>,
    directives?: DirectiveInput[]
  ): DocumentNode

  <
    Variables extends VariableDefinition<VariablesInputs>,
    VariablesInputs extends string,
  >(
    name: OperationName,
    vars: Variables,
    selection: SelectionSetComplex<PrepareVariables<NoInfer<Variables>>>,
    directives?: DirectiveInput[] | DirectivesInputWithDollar<PrepareVariables<NoInfer<Variables>>>
  ): DocumentNode
}

export function createGraphQueryFunctionCore(): GraphQueryFunctionCore {
  return (...args: any[]) => {
    const { nameDef, variables, selection, directives } = parseArgs(...args)
    const { type, name } = parseOperationName(nameDef)

    const directivesNodes = parseDirective(directives(initDirectiveDollar()))

    const ctx = createDocumentNodeContext()

    ctx.pushDefinitionNode({
      kind: Kind.OPERATION_DEFINITION,
      directives: directivesNodes,
      operation: {
        query: OperationTypeNode.QUERY,
        mutation: OperationTypeNode.MUTATION,
        subscription: OperationTypeNode.SUBSCRIPTION,
      }[type],
      variableDefinitions: parseVariables(variables),
      name: name
        ? {
            kind: Kind.NAME,
            value: name,
          }
        : undefined,
      selectionSet: parseSelectionSetComplex(selection, ctx),
    })

    return {
      kind: Kind.DOCUMENT as const,
      definitions: ctx.definitions.reverse(),
    }
  }
}

function parseArgs(...args: any[]): {
  nameDef: OperationName
  variables: VariableDefinition<string>
  selection: SelectionSetComplex<Record<string, never>>
  directives: DirectivesInputWithDollar<Record<string, never>>
} {
  switch (args.length) {
    case 1:{
      const [selection] = args
      return { nameDef: 'query', variables: {}, selection, directives: () => [] }
    }
    case 2: {
      const [nameDef, selection] = args
      return { nameDef, variables: {}, selection, directives: () => [] }
    }
    case 3: {
      const [nameDef, arg_1, arg_2] = args
      if (!Array.isArray(arg_1)) {
        const variables = arg_1
        const selection = arg_2
        return { nameDef, variables, selection, directives: () => [] }
      }

      const selection = arg_1
      const directives = arg_2
      return { nameDef, variables: {}, selection, directives: () => directives }
    }
    case 4: {
      const [nameDef, variables, selection, directives = []] = args
      return {
        nameDef,
        variables,
        selection,
        directives: typeof directives === 'function' ? directives : () => directives,
      }
    }
    default:{
      throw new Error('Invalid arguments')
    }
  }
}

function parseOperationName(
  def: OperationName,
): { type: OperationTypes, name?: string } {
  const [type, namePart] = def.split(' ', 2)

  if (!['query', 'mutation', 'subscription'].includes(type)) {
    throw new Error(`Invalid operation type: ${type}`)
  }

  return {
    type: type as OperationTypes,
    name: namePart?.trim() || undefined,
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('createGraphQueryFunctionCore', async () => {
    const { print } = await import('@0no-co/graphql.web')

    const gqfn = createGraphQueryFunctionCore()
    expect(typeof gqfn).toBe('function')

    expect(print(gqfn(['hello'])))
      .toMatchInlineSnapshot(`
        "{
          hello
        }"
      `)

    expect(print(gqfn('mutation', ['hello'])))
      .toMatchInlineSnapshot(`
        "mutation {
          hello
        }"
      `)

    expect(print(gqfn('query GetHello', ['hello'])))
      .toMatchInlineSnapshot(`
        "query GetHello {
          hello
        }"
      `)

    expect(print(gqfn(
      'query GetHello',
      ['hello'],
      [['@log', { tag: 'greeting' }]],
    ))).toMatchInlineSnapshot(`
      "query GetHello @log(tag: "greeting") {
        hello
      }"
    `)

    expect(print(gqfn(
      'mutation',
      ['hello'],
      [['@log', { tag: 'greeting' }]],
    ))).toMatchInlineSnapshot(`
      "mutation @log(tag: "greeting") {
        hello
      }"
    `)

    expect(print(gqfn(
      'query GetHello',
      { name: 'String!' },
      [{ hello: $ => $({ name: $.name }, true) }],
    ))).toMatchInlineSnapshot(`
      "query GetHello($name: String!) {
        hello(name: $name)
      }"
    `)

    expect(print(gqfn(
      'query GetHello',
      { name: 'String!' },
      [{ hello: $ => $({ name: $.name }, true) }],
      [['@log', { tag: 'greeting' }]],
    ))).toMatchInlineSnapshot(`
      "query GetHello($name: String!) @log(tag: "greeting") {
        hello(name: $name)
      }"
    `)

    expect(print(gqfn(
      'query GetHello',
      { name: 'String!' },
      [{ hello: $ => $({ name: $.name }, true) }],
      $ => [['@log', { tag: 'greeting', username: $.name }]],
    ))).toMatchInlineSnapshot(`
      "query GetHello($name: String!) @log(tag: "greeting", username: $name) {
        hello(name: $name)
      }"
    `)
  })
}
