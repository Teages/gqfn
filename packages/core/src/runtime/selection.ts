import type {
  ArgumentNode,
  DirectiveNode,
  FieldNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  SelectionNode,
  SelectionSetNode,
} from '@0no-co/graphql.web'
import type { Argument } from './argument'
import type { DocumentNodeContext } from './context'
import type { DirectiveInput } from './directive'
import type { DollarPackage, SelectionSetDollar } from './dollar'
import type { PartialResult } from './partial'
import type { VariableStore } from './variable'
import { Kind } from '@0no-co/graphql.web'
import { DirectivesSymbol } from '../internal/symbol'
import { parseArgument } from './argument'
import { createDocumentNodeContext } from './context'
import { parseDirective } from './directive'
import { initSelectionDollar } from './dollar'
import { parsePartialResult } from './partial'

export type SelectionField = string
export type SelectionObject<Variables extends VariableStore>
  = Record<string, SelectionSet<Variables>>
    & Record<symbol, PartialResult>

export type SelectionSetSimple = true
export type SelectionSetComplex<Variables extends VariableStore>
  = Array<
    | SelectionField
    | SelectionObject<Variables>
  >

export type SelectionSetDollarPackageInput<Variables extends VariableStore>
  = | SelectionSetComplex<Variables>
    | SelectionSetSimple
export type SelectionSetDollarPackage<Variables extends VariableStore>
  = DollarPackage<SelectionSetDollarPackageInput<Variables>>

export type SelectionSet<Variables extends VariableStore>
  = | SelectionSetSimple
    | (($: SelectionSetDollar<Variables>) => SelectionSetDollarPackage<Variables>)

export function parseSelectionSet<Variables extends VariableStore>(
  key: string,
  selection: SelectionSet<Variables>,
  ctx: DocumentNodeContext,
): SelectionNode {
  const { args, directives, content } = unpack(selection)
  const childNodes = parseSelectionSetDollarPackageInput(content, ctx)
  const argNodes = parseArgument(args)
  const directiveNodes = parseDirective(directives)

  if (key.startsWith('...')) {
    return buildInlineFragment(key, childNodes, argNodes, directiveNodes)
  }
  return buildField(key, childNodes, argNodes, directiveNodes)

  function unpack(selection: SelectionSet<Variables>) {
    const parsed = selection === true
      ? { content: true as const, args: {}, [DirectivesSymbol]: undefined }
      : selection(initSelectionDollar())

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
  if (!key.startsWith('... on') && key !== '...') {
    throw new Error('Unexpected inline fragment type')
  }
  const match = /^... on (\w+)$/.exec(key)
  const type = match
    ? match[1].trim()
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

export function parseSelectionSetDollarPackageInput<Variables extends VariableStore>(
  input: SelectionSetDollarPackageInput<Variables>,
  ctx: DocumentNodeContext,
): SelectionSetNode | undefined {
  if (input === true) {
    return undefined
  }

  return parseSelectionSetComplex(input, ctx)
}

export function parseSelectionSetComplex<Variables extends VariableStore>(
  selectionSet: SelectionSetComplex<Variables>,
  ctx: DocumentNodeContext,
): SelectionSetNode {
  const selectionNodes: Array<SelectionNode> = []

  selectionSet.forEach((item) => {
    if (typeof item === 'string') {
      selectionNodes.push(parseSelectionSet(item, true, ctx))
      return
    }

    // non-symbol key is field name
    Object.entries(item as SelectionObject<Variables>).forEach(([key, select]) =>
      selectionNodes.push(parseSelectionSet(key, select, ctx)),
    )

    // symbol key is partial result
    Reflect.ownKeys(item as SelectionObject<Variables>)
      .filter(key => typeof key === 'symbol')
      .forEach((key) => {
        const partial = item[key] as PartialResult
        selectionNodes.push(parsePartial(partial, ctx))
      })
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
function parsePartial(
  partial: PartialResult,
  ctx: DocumentNodeContext,
): FragmentSpreadNode {
  const { name, document, directives } = parsePartialResult(partial)

  const fragmentDefinitionNodes = document.definitions as FragmentDefinitionNode[]

  ctx.pushDefinitionNode(...fragmentDefinitionNodes)
  return {
    kind: Kind.FRAGMENT_SPREAD,
    name: { kind: Kind.NAME, value: name },
    directives: parseDirective(directives),
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

    expect(() => parseSelectionSetComplex([], ctx()))
      .toThrow('Empty selection set')
  })

  function ctx(): DocumentNodeContext {
    return createDocumentNodeContext()
  }
}
