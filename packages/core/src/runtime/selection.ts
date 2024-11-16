import type { ArgumentNode, DirectiveNode, DocumentNode, FieldNode, FragmentDefinitionNode, FragmentSpreadNode, InlineFragmentNode, SelectionNode, SelectionSetNode } from 'graphql'
import type { Argument } from './argument'
import type { DirectiveInput, MaybeWithDirective, WithDirectivesFunction } from './directive'
import type { DollarPackage, DollarPayload, SelectionSetDollar } from './dollar'
import { Kind, OperationTypeNode } from 'graphql'
import { parseArgument } from './argument'
import { createDocumentNodeContext, type DocumentNodeContext } from './context'
import { createWithDirectives, DirectivesSymbol, parseDirective } from './directive'
import { initSelectionDollar } from './dollar'

export type SelectionField = string
export type SelectionObject<Variables extends DollarPayload> =
  Record<string, SelectionSet<Variables>>

export type SelectionSetSimple = true
export type SelectionSetComplex<Variables extends DollarPayload> =
  Array<
    | SelectionField
    | SelectionObject<Variables>
    | MaybeWithDirective<DocumentNode> // Fragment
  >

export type SelectionSetDollarPackageInput<Variables extends DollarPayload> =
  | SelectionSetComplex<Variables>
  | SelectionSetSimple
export type SelectionSetDollarPackage<Variables extends DollarPayload> =
  DollarPackage<SelectionSetDollarPackageInput<Variables>>

export type SelectionSet<Variables extends DollarPayload> =
  | SelectionSetSimple
  | (($: SelectionSetDollar<Variables>, withDirectives: WithDirectivesFunction<Variables>) => SelectionSetDollarPackage<Variables>)

export function parseSelectionSet<Variables extends DollarPayload>(
  key: string,
  selection: SelectionSet<Variables>,
  ctx: DocumentNodeContext,
): SelectionNode {
  const { args, directives, content } = unpack(selection)
  const childNodes = parseSelectionSetDollarPackageInput(content, ctx)
  const argNodes = parseArgument(args)
  const directiveNodes = parseDirective(directives)

  return key.startsWith('...')
    // Inline fragment
    ? buildInlineFragment(key, childNodes, argNodes, directiveNodes)
    // Field
    : buildField(key, childNodes, argNodes, directiveNodes)

  function unpack(selection: SelectionSet<Variables>) {
    const parsed = selection === true
      ? { content: true as const, args: {}, [DirectivesSymbol]: undefined }
      : selection(initSelectionDollar(), createWithDirectives())

    return {
      content: parsed.content as SelectionSetDollarPackageInput<Variables>,
      args: parsed.args as Argument,
      directives: parsed[DirectivesSymbol] as DirectiveInput[],
    }
  }
}
function buildInlineFragment(
  key: string,
  childNode: SelectionSetNode | undefined,
  argNodes: ArgumentNode[],
  directiveNodes: readonly DirectiveNode[],
): InlineFragmentNode {
  const type = key.startsWith('... on')
    ? /... on (\w+)/.exec(key)![1].trim()
    : undefined // self-referencing

  if (!childNode) {
    throw new Error('Unexpected field selection set for inline fragment')
  }
  if (argNodes.length > 0) {
    throw new Error('Unexpected arguments for inline fragment')
  }

  return {
    kind: Kind.INLINE_FRAGMENT,
    typeCondition: type
      ? {
          kind: Kind.NAMED_TYPE,
          name: {
            kind: Kind.NAME,
            value: type,
          },
        }
      : undefined,
    selectionSet: childNode,
    directives: directiveNodes,
  }
}
function buildField(
  key: string,
  childNode: SelectionSetNode | undefined,
  argNodes: ArgumentNode[],
  directiveNodes: readonly DirectiveNode[],
): FieldNode {
  const { name, value } = parseAlias(key)
  return {
    kind: Kind.FIELD,
    alias: value === name
      ? undefined
      : {
          kind: Kind.NAME,
          value: name,
        },
    name: {
      kind: Kind.NAME,
      value,
    },
    selectionSet: childNode,
    arguments: argNodes,
    directives: directiveNodes,
  }
}
function parseAlias(key: string): { name: string, value: string } {
  const [name, value] = key.split(':').map(s => s.trim())
  if (!value) {
    return { name, value: name }
  }
  return { name, value }
}

export function parseSelectionSetDollarPackageInput<Variables extends DollarPayload>(
  input: SelectionSetDollarPackageInput<Variables>,
  ctx: DocumentNodeContext,
) {
  if (input === true) {
    return undefined
  }

  return parseSelectionSetComplex(input, ctx)
}

export function parseSelectionSetComplex<Variables extends DollarPayload>(
  selectionSet: SelectionSetComplex<Variables>,
  ctx: DocumentNodeContext,
): SelectionSetNode {
  const selectionNodes: Array<SelectionNode> = []

  selectionSet.forEach((item) => {
    switch (true) {
      case typeof item === 'string': {
        selectionNodes.push(parseSelectionSet(item, true, ctx))
        break
      }

      // DocumentNode with one or more FragmentDefinition
      case typeof item === 'object' && item.kind === Kind.DOCUMENT: {
        const node = item as MaybeWithDirective<DocumentNode>

        // select the first fragment
        if (node.definitions.some(d => d.kind !== Kind.FRAGMENT_DEFINITION)) {
          throw new Error('Unexpected definitions, expected a DocumentNode with one or more fragment definition')
        }
        const fragmentDefinitionNodes = node.definitions as FragmentDefinitionNode[]
        const name = fragmentDefinitionNodes[0].name.value

        selectionNodes.push({
          kind: Kind.FRAGMENT_SPREAD,
          name: { kind: Kind.NAME, value: name },
          directives: DirectivesSymbol in node
            ? parseDirective(node[DirectivesSymbol])
            : [],
        } satisfies FragmentSpreadNode)
        ctx.pushDefinitionNode(...fragmentDefinitionNodes)
        break
      }

      // SelectionObject<Variables>
      default: {
        Object.entries(item as SelectionObject<Variables>).forEach(([key, select]) =>
          selectionNodes.push(parseSelectionSet(key, select, ctx)),
        )
        break
      }
    }
  })

  // Empty selection set is not allowed
  if (selectionNodes.length === 0) {
    throw new Error('Empty selection set')
  }
  return {
    kind: Kind.SELECTION_SET,
    selections: selectionNodes,
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('parseSelectionSet', () => {
    expect(parseSelectionSet('key', true, ctx())).toMatchObject({
      kind: Kind.FIELD,
      name: { kind: Kind.NAME, value: 'key' },
      selectionSet: undefined,
      arguments: [],
      directives: [],
    })

    expect(parseSelectionSet('key', $ => $(['a']), ctx())).toMatchObject({
      kind: Kind.FIELD,
      name: { kind: Kind.NAME, value: 'key' },
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
      arguments: [],
      directives: [],
    })

    expect(parseSelectionSet('key', $ => $([{ a: true }]), ctx())).toMatchObject({
      kind: Kind.FIELD,
      name: { kind: Kind.NAME, value: 'key' },
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
      arguments: [],
      directives: [],
    })

    expect(parseSelectionSet('k:key', $ => $([{ a: true }]), ctx())).toMatchObject({
      kind: Kind.FIELD,
      alias: { kind: Kind.NAME, value: 'k' },
      name: { kind: Kind.NAME, value: 'key' },
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
      arguments: [],
      directives: [],
    })

    expect(parseSelectionSet(
      'key',
      $ => $([{ a: true }])
        .withDirective(['@include', { if: true }]),
      ctx(),
    )).toMatchObject({
      kind: Kind.FIELD,
      name: { kind: Kind.NAME, value: 'key' },
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
      arguments: [],
      directives: [{
        kind: Kind.DIRECTIVE,
        name: { kind: Kind.NAME, value: 'include' },
        arguments: [{
          kind: Kind.ARGUMENT,
          value: { kind: Kind.BOOLEAN, value: true },
        }],
      }],
    })

    expect(parseSelectionSet(
      'key',
      $ => $([{
        '...': $ => $([{ a: true }]),
      }]),
      ctx(),
    )).toMatchObject({
      kind: Kind.FIELD,
      name: { kind: Kind.NAME, value: 'key' },
      selectionSet: {
        kind: Kind.SELECTION_SET,
        selections: [
          {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: undefined,
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
            directives: [],
          },
        ],
      },
      arguments: [],
      directives: [],
    })

    expect(parseSelectionSet(
      'key',
      $ => $([{
        '... on Type': $ => $([{ a: true }]),
      }]),
      ctx(),
    )).toMatchObject({
      kind: Kind.FIELD,
      name: { kind: Kind.NAME, value: 'key' },
      selectionSet: {
        kind: Kind.SELECTION_SET,
        selections: [
          {
            kind: Kind.INLINE_FRAGMENT,
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
            directives: [],
          },
        ],
      },
      arguments: [],
      directives: [],
    })

    expect(() => parseSelectionSet('key', $ => $([{ '...': $ => $({ a: 1 }, ['a']) }]), ctx()))
      .toThrow('Unexpected arguments for inline fragment')
    expect(() => parseSelectionSet('key', $ => $([{ '...': $ => $(true) }]), ctx()))
      .toThrow('Unexpected field selection set for inline fragment')
  })

  it('parseSelectionSetDollarPackageInput', () => {
    expect(parseSelectionSetDollarPackageInput(true, ctx())).toBe(undefined)
    expect(parseSelectionSetDollarPackageInput(['a'], ctx()))
      .toMatchObject(parseSelectionSetComplex(['a'], ctx()))
  })

  it('parseSelectionSetComplex', () => {
    expect(parseSelectionSetComplex(['key'], ctx())).toMatchObject({
      kind: Kind.SELECTION_SET,
      selections: [
        {
          kind: Kind.FIELD,
          name: { kind: Kind.NAME, value: 'key' },
          selectionSet: undefined,
          arguments: [],
          directives: [],
        },
      ],
    })

    withContext((ctx) => {
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
      expect(parseSelectionSetComplex([fragment], ctx())).toMatchObject({
        kind: Kind.SELECTION_SET,
        selections: [
          {
            kind: Kind.FRAGMENT_SPREAD,
            name: { kind: Kind.NAME, value: 'fragment' },
            directives: [],
          },
        ],
      })

      expect(ctx().definitions).toMatchObject([{
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
      }])
    })

    withContext((ctx) => {
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
      const withDirectives = createWithDirectives()
      expect(parseSelectionSetComplex([withDirectives(fragment, [
        ['@foo', { a: '1' }],
      ])], ctx())).toMatchObject({
        kind: Kind.SELECTION_SET,
        selections: [
          {
            kind: Kind.FRAGMENT_SPREAD,
            name: { kind: Kind.NAME, value: 'fragment' },
            directives: [{
              kind: Kind.DIRECTIVE,
              name: { kind: Kind.NAME, value: 'foo' },
              arguments: [{
                kind: Kind.ARGUMENT,
                value: { kind: Kind.STRING, value: '1' },
              }],
            }],
          },
        ],
      })

      expect(ctx().definitions).toMatchObject([{
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
      }])
    })

    expect(() => parseSelectionSetComplex([], ctx())).toThrow('Empty selection set')

    const query = {
      kind: Kind.DOCUMENT,
      definitions: [{
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
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
    expect(() => parseSelectionSetComplex([query], ctx()))
      .toThrow('Unexpected definitions, expected a DocumentNode with one or more fragment definition')
  })

  function withContext(fn: (ctx: () => DocumentNodeContext) => void) {
    const context = ctx()
    fn(() => context)
  }

  function ctx(): DocumentNodeContext {
    return createDocumentNodeContext()
  }
}
