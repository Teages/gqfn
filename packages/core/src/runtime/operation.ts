import type { DocumentNode } from 'graphql'
import { Kind, OperationTypeNode } from 'graphql'
import { createDocumentNodeContext } from './context'
import { type DirectiveInput, type DirectivesInputWithDollar, parseDirective } from './directive'
import { initDirectiveDollar } from './dollar'
import { parseSelectionSetComplex, type SelectionSetComplex } from './selection'
import { parseVariables, type PrepareVariables, type VariableDefinition } from './variable'

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
    default: { // case 4:
      const [nameDef, variables, selection, directives = []] = args
      return {
        nameDef,
        variables,
        selection,
        directives: typeof directives === 'function' ? directives : () => directives,
      }
    }
  }
}

function parseOperationName(
  def: OperationName,
): { type: OperationTypes, name?: string } {
  const [type, namePart] = def.split(' ', 2)

  return {
    type: type as OperationTypes,
    name: namePart?.trim() || undefined,
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('createGraphQueryFunctionCore', async () => {
    const { parse } = await import('graphql')
    const gql = (str: string) => parse(str, { noLocation: true })

    const gqfn = createGraphQueryFunctionCore()
    expect(typeof gqfn).toBe('function')

    expect(gqfn(['hello'])).toMatchObject(gql(`
      {
        hello
      }
    `))

    expect(gqfn('mutation', ['hello'])).toMatchObject(gql(`
      mutation {
        hello
      }
    `))

    expect(gqfn('query GetHello', ['hello'])).toMatchObject(gql(`
      query GetHello {
        hello
      }
    `))

    expect(gqfn(
      'query GetHello',
      ['hello'],
      [['@log', { tag: 'greeting' }]],
    )).toMatchObject(gql(`
      query GetHello @log(tag: "greeting") {
        hello
      }
    `))

    expect(gqfn(
      'mutation',
      ['hello'],
      [['@log', { tag: 'greeting' }]],
    )).toMatchObject(gql(`
      mutation @log(tag: "greeting") {
        hello
      }
    `))

    expect(gqfn(
      'query GetHello',
      { name: 'String!' },
      [{ hello: $ => $({ name: $.name }, true) }],
    )).toMatchObject(gql(`
      query GetHello($name: String!) {
        hello(name: $name)
      }
    `))

    expect(gqfn(
      'query GetHello',
      { name: 'String!' },
      [{ hello: $ => $({ name: $.name }, true) }],
      [['@log', { tag: 'greeting' }]],
    )).toMatchObject(gql(`
      query GetHello($name: String!) @log(tag: "greeting") {
        hello(name: $name)
      }
    `))

    expect(gqfn(
      'query GetHello',
      { name: 'String!' },
      [{ hello: $ => $({ name: $.name }, true) }],
      $ => [['@log', { tag: 'greeting', username: $.name }]],
    )).toMatchObject(gql(`
      query GetHello($name: String!) @log(tag: "greeting", username: $name) {
        hello(name: $name)
      }
    `))
  })
}
