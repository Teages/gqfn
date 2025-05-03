import type { DocumentNode } from '@0no-co/graphql.web'
import type { DirectiveInput, DirectivesInputWithDollar } from './directive'
import type { SelectionSetDollar } from './dollar'
import type { FragmentBaseDefinition, FragmentName } from './fragment'
import type { SelectionSetComplex } from './selection'
import type { PrepareVariables, Variable, VariableDefinition } from './variable'
import { Kind } from '@0no-co/graphql.web'
import { DirectivesSymbol, PartialContentDocumentNodeSymbol, PartialContentFragmentNameSymbol } from '../internal/symbol'
import { createGraphQueryFunctionFragment } from './fragment'

const PartialContentSymbolLabel = '@gqfn/core:PartialContent'
export type PartialContent = Record<symbol, PartialResult>

export interface PartialResult {
  [PartialContentFragmentNameSymbol]: string
  [PartialContentDocumentNodeSymbol]: DocumentNode
  [DirectivesSymbol]?: DirectiveInput[]
}

export interface PartialPackage {
  ($: SelectionSetDollar<any>, directives?: DirectiveInput[]): PartialContent
}

export interface GraphQueryPartial {
  (
    name: FragmentName,
    base: FragmentBaseDefinition,
    fragment: DocumentNode
  ): PartialPackage

  (
    name: FragmentName,
    base: FragmentBaseDefinition,
    selection: SelectionSetComplex<Record<string, never>>,
    directives?: DirectiveInput[]
  ): PartialPackage

  <
    Variables extends VariableDefinition<VariablesInputs>,
    VariablesInputs extends string,
  >(
    name: FragmentName,
    base: FragmentBaseDefinition,
    vars: Variables,
    selection: SelectionSetComplex<PrepareVariables<NoInfer<Variables>>>,
    directives?: DirectiveInput[] | DirectivesInputWithDollar<PrepareVariables<NoInfer<Variables>>>
  ): PartialPackage
}

export function parsePartialResult(partial: PartialResult): {
  name: string
  document: DocumentNode
  directives?: DirectiveInput[]
} {
  return {
    name: partial[PartialContentFragmentNameSymbol],
    document: partial[PartialContentDocumentNodeSymbol],
    directives: partial[DirectivesSymbol],
  }
}

export function createGraphQueryPartial(): GraphQueryPartial {
  return (...args: any[]) => {
    const createFragment = createGraphQueryFunctionFragment()
    const { nameDef, baseDef, variables, init, directives } = parseArgs(...args)
    const name = nameDef.slice('fragment'.length).trim()
    const fragment = Array.isArray(init)
      ? createFragment(nameDef, baseDef, variables, init, directives)
      : verifyFragmentDocumentNode(name, init)

    // move the exa

    return (_dollar: unknown, directives?: DirectiveInput[]) => {
      const key = Symbol(PartialContentSymbolLabel)
      return {
        [key]: {
          [PartialContentFragmentNameSymbol]: name,
          [PartialContentDocumentNodeSymbol]: fragment,
          [DirectivesSymbol]: directives,
        },
      }
    }
  }
}
function verifyFragmentDocumentNode(name: string, document: DocumentNode): DocumentNode {
  if (document.definitions.some(d => d.kind !== Kind.FRAGMENT_DEFINITION)) {
    throw new Error('Unexpected definitions, expected a DocumentNode with one or more fragment definition')
  }

  if (document.definitions.every(d => d.kind === Kind.FRAGMENT_DEFINITION && d.name.value !== name)) {
    throw new Error(`Cannot find fragment definition for "${name}"`)
  }

  return document
}
function parseArgs(...args: any[]): {
  nameDef: FragmentName
  baseDef: FragmentBaseDefinition
  variables: VariableDefinition<string>
  init: SelectionSetComplex<Record<string, never>> | DocumentNode
  directives: DirectivesInputWithDollar<Record<string, never>>
} {
  switch (args.length) {
    case 3: {
      const [nameDef, baseDef, init] = args
      return { nameDef, baseDef, variables: {}, init, directives: () => [] }
    }
    case 4: {
      const [nameDef, baseDef, arg_2, arg_3] = args
      if (!Array.isArray(arg_2)) {
        const variables = arg_2
        const selection = arg_3
        return { nameDef, baseDef, variables, init: selection, directives: () => [] }
      }

      const selection = arg_2
      const directives = arg_3
      return { nameDef, baseDef, variables: {}, init: selection, directives: () => directives }
    }
    default: { // case 5:
      const [nameDef, baseDef, variables, selection, directives = []] = args
      return {
        nameDef,
        baseDef,
        variables,
        init: selection,
        directives: typeof directives === 'function' ? directives : () => directives,
      }
    }
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('createGraphQueryPartial', async () => {
    const gqf = await import('./operation').then(m => m.createGraphQueryFunctionCore())
    const gqfp = createGraphQueryPartial()
    const gqfr = createGraphQueryFunctionFragment()
    const dollar = await import('./dollar').then(m => m.initSelectionDollar)
    const { print, parse } = await import('@0no-co/graphql.web')

    const case_0 = gqfp(
      'fragment A',
      'on T',
      ['id'],
      [['@log', { tag: 'greeting' }]],
    )
    const fragment = gqfr('fragment A', 'on T', ['id'], [['@log', { tag: 'greeting' }]])

    expect(getPartialDocumentNode(
      case_0(dollar<Record<string, never>>()),
    )).toMatchObject(
      gqfr('fragment A', 'on T', ['id'], [['@log', { tag: 'greeting' }]]),
    )

    const case_1 = gqfp('fragment A', 'on T', fragment)
    expect(getPartialDocumentNode(
      case_1(dollar<Record<string, never>>()),
    )).toMatchObject(
      gqfr('fragment A', 'on T', ['id'], [['@log', { tag: 'greeting' }]]),
    )

    const case_2 = gqfp('fragment A', 'on T', ['id'], [['@log', { tag: 'greeting' }]])
    expect(print(getPartialDocumentNode(
      case_2(dollar<Record<string, never>>()),
    )))
      .toMatchInlineSnapshot(`
        "fragment A on T @log(tag: "greeting") {
          id
        }"
      `)

    const case_3 = gqfp('fragment A', 'on T', { username: 'String!' }, [{ hello: $ => $({ name: $.username }, true) }])
    expect(print(getPartialDocumentNode(
      case_3(dollar<{ username: Variable<'String!'> }>()),
    )))
      .toMatchInlineSnapshot(`
        "fragment A on T {
          hello(name: $username)
        }"
      `)
    expect(print(
      gqf('query Q', { username: 'String!', count: 'Int!' }, [{
        '...': $ => $([{ ...case_3($) }]),
      }]),
    )).toMatchInlineSnapshot(`
      "query Q($username: String!, $count: Int!) {
        ... {
          ...A
        }
      }

      fragment A on T {
        hello(name: $username)
      }"
    `)

    const case_4 = gqfp('fragment A', 'on T', { username: 'String!' }, [{ hello: $ => $({ name: $.username }, true) }], [['@log', { tag: 'greeting' }]])
    expect(print(getPartialDocumentNode(
      case_4(dollar<{ username: Variable<'String!'> }>()),
    ))).toMatchInlineSnapshot(`
      "fragment A on T @log(tag: "greeting") {
        hello(name: $username)
      }"
    `)
    expect(print(
      gqf('query Q', { username: 'String!', count: 'Int!' }, [{
        '...': $ => $([{ ...case_4($) }]),
      }]),
    )).toMatchInlineSnapshot(`
      "query Q($username: String!, $count: Int!) {
        ... {
          ...A
        }
      }

      fragment A on T @log(tag: "greeting") {
        hello(name: $username)
      }"
    `)

    const case_5 = gqfp(
      'fragment A',
      'on T',
      { username: 'String!' },
      [{ hello: $ => $({ name: $.username }, true) }],
      $ => [['@log', { tag: 'greeting', username: $.username }]],
    )
    expect(print(getPartialDocumentNode(
      case_5(dollar<{ username: Variable<'String!'> }>()),
    ))).toMatchInlineSnapshot(`
      "fragment A on T @log(tag: "greeting", username: $username) {
        hello(name: $username)
      }"
    `)
    expect(print(
      gqf('query Q', { username: 'String!', count: 'Int!' }, [{
        '...': $ => $([{ ...case_5($) }]),
      }]),
    )).toMatchInlineSnapshot(`
      "query Q($username: String!, $count: Int!) {
        ... {
          ...A
        }
      }

      fragment A on T @log(tag: "greeting", username: $username) {
        hello(name: $username)
      }"
    `)

    expect(() => gqfp('fragment A', 'on T', parse(`{ hello }`)))
      .toThrow('Unexpected definitions, expected a DocumentNode with one or more fragment definition')

    expect(() => gqfp('fragment A', 'on T', parse(`fragment B on T { id }`)))
      .toThrow('Cannot find fragment definition for "A"')
  })

  function getPartialDocumentNode(partial: PartialContent) {
    const nodes: DocumentNode[] = []
    Reflect.ownKeys(partial).forEach((key) => {
      nodes.push(((partial as any)[key])[PartialContentDocumentNodeSymbol])
    })

    return nodes[0]
  }
}
