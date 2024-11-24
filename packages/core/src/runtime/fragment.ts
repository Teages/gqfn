import type { DocumentNode } from 'graphql'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import { Kind } from 'graphql'
import { createDocumentNodeContext } from './context'
import { parseDirective } from './directive'
import { initDirectiveDollar } from './dollar'
import { parseSelectionSetComplex, type SelectionSetComplex } from './selection'
import { parseVariables, type PrepareVariables, type VariableDefinition } from './variable'

export type FragmentType = 'fragment'
export type FragmentName = `${FragmentType} ${string}`
export type FragmentBaseDefinition = `on ${string}`

export interface GraphQueryFunctionFragment {
  (
    name: FragmentName,
    base: FragmentBaseDefinition,
    selection: SelectionSetComplex<Record<string, never>>,
    directives?: DirectiveInput[]
  ): DocumentNode

  <
    Variables extends VariableDefinition<VariablesInputs>,
    VariablesInputs extends string,
  >(
    name: FragmentName,
    base: FragmentBaseDefinition,
    vars: Variables,
    selection: SelectionSetComplex<PrepareVariables<NoInfer<Variables>>>,
    directives?: DirectiveInput[] | DirectivesInputWithDollar<PrepareVariables<NoInfer<Variables>>>
  ): DocumentNode
}

export function createGraphQueryFunctionFragment(): GraphQueryFunctionFragment {
  return (...args: any[]) => {
    const { nameDef, baseDef, variables, selection, directives } = parseArgs(...args)
    const { name } = parseFragmentName(nameDef)
    const base = parseBaseDefinition(baseDef)

    const directivesNodes = parseDirective(directives(initDirectiveDollar()))

    const ctx = createDocumentNodeContext()

    ctx.pushDefinitionNode({
      kind: Kind.FRAGMENT_DEFINITION,
      directives: directivesNodes,
      typeCondition: {
        kind: Kind.NAMED_TYPE,
        name: {
          kind: Kind.NAME,
          value: base,
        },
      },
      variableDefinitions: parseVariables(variables),
      name: {
        kind: Kind.NAME,
        value: name,
      },
      selectionSet: parseSelectionSetComplex(selection, ctx),
    })

    return {
      kind: Kind.DOCUMENT as const,
      definitions: ctx.definitions.reverse(),
    }
  }
}

function parseArgs(...args: any[]): {
  nameDef: FragmentName
  baseDef: FragmentBaseDefinition
  variables: VariableDefinition<string>
  selection: SelectionSetComplex<Record<string, never>>
  directives: DirectivesInputWithDollar<Record<string, never>>
} {
  switch (args.length) {
    case 3: {
      const [nameDef, baseDef, selection] = args
      return { nameDef, baseDef, variables: {}, selection, directives: () => [] }
    }
    case 4: {
      const [nameDef, baseDef, arg_2, arg_3] = args
      if (!Array.isArray(arg_2)) {
        const variables = arg_2
        const selection = arg_3
        return { nameDef, baseDef, variables, selection, directives: () => [] }
      }

      const selection = arg_2
      const directives = arg_3
      return { nameDef, baseDef, variables: {}, selection, directives: () => directives }
    }
    default: { // case 5:
      const [nameDef, baseDef, variables, selection, directives = []] = args
      return {
        nameDef,
        baseDef,
        variables,
        selection,
        directives: typeof directives === 'function' ? directives : () => directives,
      }
    }
  }
}

function parseBaseDefinition(
  def: FragmentBaseDefinition,
): string {
  return def.slice(3).trim()
}

function parseFragmentName(
  def: FragmentName,
): { type: FragmentType, name: string } {
  const [type, namePart] = def.split(' ', 2)

  return {
    type: type as FragmentType,
    name: namePart.trim(),
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('createGraphQueryFunctionFragment', async () => {
    const { parse } = await import('graphql')
    const gql = (str: string) => parse(str, { noLocation: true })

    const gqfr = createGraphQueryFunctionFragment()
    expect(typeof gqfr).toBe('function')

    expect(gqfr('fragment A', 'on T', ['id'])).toMatchObject(gql(`
      fragment A on T { id }
    `))

    expect(gqfr(
      'fragment A',
      'on T',
      ['id'],
      [['@log', { tag: 'greeting' }]],
    )).toMatchObject(gql(`
      fragment A on T @log(tag: "greeting") { id }
    `))

    expect(gqfr(
      'fragment A',
      'on T',
      { username: 'String!' },
      [{ hello: $ => $({ name: $.username }, true) }],
    )).toMatchObject(gql(`
      fragment A on T {
        hello(name: $username)
      }
    `))

    expect(gqfr(
      'fragment A',
      'on T',
      { username: 'String!' },
      [{ hello: $ => $({ name: $.username }, true) }],
      [['@log', { tag: 'greeting' }]],
    )).toMatchObject(gql(`
      fragment A on T @log(tag: "greeting") {
        hello(name: $username)
      }
    `))

    expect(gqfr(
      'fragment A',
      'on T',
      { username: 'String!' },
      [{ hello: $ => $({ name: $.username }, true) }],
      $ => [['@log', { tag: 'greeting', username: $.username }]],
    )).toMatchObject(gql(`
      fragment A on T @log(tag: "greeting", username: $username) {
        hello(name: $username)
      }
    `))
  })
}