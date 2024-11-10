import type { ArgumentNode, DirectiveNode, DocumentNode, FieldNode, FragmentDefinitionNode, FragmentSpreadNode, InlineFragmentNode, SelectionNode, SelectionSetNode } from 'graphql'
import type { Context } from './context'
import type { DollarContext, DollarPayload, SelectionDollar } from './dollar'
import { Kind } from 'graphql'
import { parseArgs } from './arg'
import { parseDirective } from './directive'
import { initSelectionDollar } from './dollar'

export type TypeSelection<Vars extends DollarPayload> = Array<
  | SelectionField
  | SelectionObject<Vars>
  | DocumentNode
>

export type SelectionSet<Vars extends DollarPayload> =
  | true
  | (($: SelectionDollar<Vars>) => DollarContext<SelectionContext<Vars>>)

export type SelectionContext<Vars extends DollarPayload> =
  | TypeSelection<Vars>
  | true

export type SelectionField =
  | string

export interface SelectionObject<Vars extends DollarPayload> {
  [key: string]: SelectionSet<Vars>
}

export function parseTypeSelection<
  Vars extends DollarPayload,
>(
  selectionSet: TypeSelection<Vars>,
  ctx: Context,
): SelectionSetNode {
  const selections: Array<SelectionNode> = []

  selectionSet.forEach((item) => {
    switch (true) {
      case typeof item === 'string': {
        selections.push(parseSelectionSet(item, true, ctx))
        break
      }

      // DocumentNode with one or more FragmentDefinition
      case typeof item === 'object' && item.kind === Kind.DOCUMENT: {
        const node = item as DocumentNode
        if (node.definitions.some(d => d.kind !== Kind.FRAGMENT_DEFINITION)) {
          throw new Error('Unexpected definitions, expected a DocumentNode with one or more fragment definition')
        }

        // select the first fragment
        const name = (node.definitions as FragmentDefinitionNode[])[0].name.value

        selections.push({
          kind: Kind.FRAGMENT_SPREAD,
          name: { kind: Kind.NAME, value: name },
        } satisfies FragmentSpreadNode)
        ctx.pushDefinitionNode(node.definitions[0])
        break
      }

      // SelectionObject<Vars>
      default: {
        Object.entries(item).forEach(([key, select]) =>
          selections.push(parseSelectionSet(key, select, ctx)),
        )
        break
      }
    }
  })

  // Empty selection set is not allowed
  if (selections.length === 0) {
    throw new Error('Empty selection set')
  }
  return {
    kind: Kind.SELECTION_SET,
    selections,
  }
}

export function parseSelectionFunc<
  Vars extends DollarPayload,
>(
  selection: SelectionSet<Vars>,
): DollarContext<SelectionContext<Vars>> {
  if (selection === true) {
    return { content: true, args: {}, directives: [] }
  }
  return selection(initSelectionDollar())
}

export function parseSelectionSet<
  Vars extends DollarPayload,
>(
  key: string,
  selection: SelectionSet<Vars>,
  ctx: Context,
): SelectionNode {
  const { args, directives, content } = parseSelectionFunc(selection)
  const childNode = parseSelectionContext(content, ctx)
  const argNodes = parseArgs(args)
  const directiveNodes = parseDirective(directives)

  return key.startsWith('...')
    // Inline fragment
    ? buildInlineFragment(key, childNode, argNodes, directiveNodes)
    // Field
    : buildField(key, childNode, argNodes, directiveNodes)
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

export function parseSelectionContext<
  Vars extends DollarPayload,
>(
  selectionSet: SelectionContext<Vars>,
  context: Context,
): SelectionSetNode | undefined {
  if (selectionSet === true) {
    return undefined
  }

  return parseTypeSelection(selectionSet, context)
}
