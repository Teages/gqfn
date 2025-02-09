import type { ConstDirectiveNode, DirectiveNode, DocumentNode, ValueNode } from 'graphql'
import type { Argument } from './argument'
import type { DirectiveDollar, DollarPackage, DollarPayload } from './dollar'
import { Kind } from 'graphql'
import { DirectivesSymbol } from '../internal/symbol'
import { parseArgument } from './argument'
import { initDirectiveDollar } from './dollar'
import { Variable } from './variable'

export type DirectiveInput = [
  def: `@${string}`,
  argument: Argument,
]

export type WithDirective<T extends DollarPackage<any> | DocumentNode> = T & {
  [DirectivesSymbol]: DirectiveInput[]
}
export type MaybeWithDirective<T extends DollarPackage<any> | DocumentNode> = T | WithDirective<T>

export type DirectivesInputWithDollar<Variables extends DollarPayload> =
  ($: DirectiveDollar<Variables>) => Array<DirectiveInput>

export interface WithDirectivesFunction<Variables extends DollarPayload> {
  <T extends DollarPackage<any> | DocumentNode>(
    target: T,
    directives: DirectiveInput[] | DirectivesInputWithDollar<Variables>,
  ): WithDirective<T>
}
export function createWithDirectives<Variables extends DollarPayload>(): WithDirectivesFunction<Variables> {
  return (target, directives) => Object.assign({ ...target }, {
    [DirectivesSymbol]: typeof directives === 'function'
      ? directives(initDirectiveDollar())
      : directives,
  })
}

export function parseDirective(
  directivesInput: Array<DirectiveInput> | undefined,
  constOnly?: false,
): ReadonlyArray<DirectiveNode>
export function parseDirective(
  directivesInput: Array<DirectiveInput> | undefined,
  constOnly: true,
): ReadonlyArray<ConstDirectiveNode>
export function parseDirective(
  directivesInput: Array<DirectiveInput> | undefined,
  constOnly: boolean = false,
): ReadonlyArray<DirectiveNode> | ReadonlyArray<ConstDirectiveNode> {
  if (!directivesInput) {
    return []
  }

  const directives = directivesInput.map(([def, argument]) => ({
    kind: Kind.DIRECTIVE,
    name: {
      kind: Kind.NAME,
      value: def.split('@')[1],
    },
    arguments: parseArgument(argument),
  })) satisfies ReadonlyArray<DirectiveNode>

  if (constOnly) {
    // check if all directives are const node
    if (
      directives.some(
        directive => directive.arguments?.some(
          arg => !isConstNode(arg.value),
        ),
      )
    ) {
      throw new Error('Expected all directives to be const node')
    }
  }

  return directives
}

function isConstNode(node: ValueNode): boolean {
  if (node.kind === Kind.VARIABLE) {
    return false
  }
  if (node.kind === Kind.LIST) {
    return node.values.every(isConstNode)
  }
  if (node.kind === Kind.OBJECT) {
    return node.fields.every(field => isConstNode(field.value))
  }
  return true
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('parseDirective', () => {
    expect(parseDirective([
      ['@foo', { a: 1, b: 2.3 }],
      ['@auth', { quux: new Variable('username') }],
    ])).toMatchObject([
      {
        kind: Kind.DIRECTIVE,
        name: { kind: Kind.NAME, value: 'foo' },
        arguments: [
          {
            kind: Kind.ARGUMENT,
            value: { kind: Kind.INT, value: '1' },
          },
          {
            kind: Kind.ARGUMENT,
            value: { kind: Kind.FLOAT, value: '2.3' },
          },
        ],
      },
      {
        kind: Kind.DIRECTIVE,
        name: {
          kind: Kind.NAME,
          value: 'auth',
        },
        arguments: [
          {
            kind: Kind.ARGUMENT,
            value: {
              kind: Kind.VARIABLE,
              name: { kind: Kind.NAME, value: 'username' },
            },
          },
        ],
      },
    ])

    expect(parseDirective([
      ['@foo', { a: '1' }],
    ], true)).toMatchObject([
      {
        kind: Kind.DIRECTIVE,
        name: { kind: Kind.NAME, value: 'foo' },
        arguments: [{
          kind: Kind.ARGUMENT,
          value: { kind: Kind.STRING, value: '1' },
        }],
      },
    ])

    expect(() => parseDirective([
      ['@foo', { bar: 123 }],
      ['@auth', { user: new Variable('username') }],
    ], true)).toThrow('Expected all directives to be const node')

    expect(() => parseDirective([
      ['@foo', { bar: 123 }],
      ['@auth', { user: { username: new Variable('username') } }],
    ], true)).toThrow('Expected all directives to be const node')

    expect(() => parseDirective([
      ['@foo', { bar: 123 }],
      ['@auth', { users: [new Variable('username')] }],
    ], true)).toThrow('Expected all directives to be const node')
  })

  it('withDirectives', () => {
    const fragment = {
      kind: Kind.DOCUMENT,
      definitions: [{
        kind: Kind.FRAGMENT_DEFINITION,
        name: { kind: Kind.NAME, value: 'fragment' },
        typeCondition: {
          kind: Kind.NAMED_TYPE,
          name: { kind: Kind.NAME, value: 'Type' },
        },
        selectionSet: {
          kind: Kind.SELECTION_SET,
          selections: [
            {
              kind: Kind.FIELD,
              name: { kind: Kind.NAME, value: 'a' },
              selectionSet: undefined,
              arguments: [],
              directives: [],
            },
          ],
        },
      }],
    } satisfies DocumentNode

    const withDirectives = createWithDirectives<{ username: Variable<'String!'> }>()
    expect(withDirectives(fragment, [
      ['@foo', { a: 1, b: 2.3 }],
    ])[DirectivesSymbol]).toMatchObject([
      ['@foo', { a: 1, b: 2.3 }],
    ])

    expect(withDirectives(fragment, $ => [
      ['@foo', { a: $.username }],
    ])[DirectivesSymbol]).toMatchObject([
      ['@foo', { a: new Variable('username') }],
    ])
  })
}
