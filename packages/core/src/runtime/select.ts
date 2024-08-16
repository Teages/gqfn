import type { FieldNode, InlineFragmentNode, SelectionNode, SelectionSetNode } from 'graphql'
import { Kind } from 'graphql'
import type { ArrayMayFollowItem } from '../types/utils/object'
import type { DollarContext, DollarPayload, SelectionDollar } from './dollar'
import { initSelectionDollar } from './dollar'
import { parseArgs } from './arg'
import { parseDirective } from './directive'

export type TypeSelection<Vars extends DollarPayload> =
  ArrayMayFollowItem<SelectionField, SelectionObject<Vars>>

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
): SelectionSetNode {
  const selectionNodes: Array<SelectionNode> = []

  const last = selectionSet[selectionSet.length - 1]
  const items = selectionSet.slice(0, -1) as Array<SelectionField>

  const selects: SelectionObject<Vars> = {}

  items.forEach(item => selects[item] = true)
  if (typeof last === 'object') {
    Object.assign(selects, last)
  }
  else {
    selects[last] = true
  }

  Object.keys(selects).forEach((key) => {
    selectionNodes.push(parseSelection(key, selects[key]))
  })

  if (selectionNodes.length === 0) {
    throw new Error('Empty selection set')
  }
  return {
    kind: Kind.SELECTION_SET,
    selections: selectionNodes,
  } satisfies SelectionSetNode
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

export function parseSelection<
  Vars extends DollarPayload,
>(
  key: string,
  selection: SelectionSet<Vars>,
): SelectionNode {
  const { args, directives, content } = parseSelectionFunc(selection)
  const childNode = parseSelectionContext(content)
  const argNodes = parseArgs(args)
  const directiveNodes = parseDirective(directives)

  // Inline fragment
  if (key.startsWith('...')) {
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
    } satisfies InlineFragmentNode
  }

  // Field
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
  } satisfies FieldNode
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
): SelectionSetNode | undefined {
  if (selectionSet === true) {
    return undefined
  }

  return parseTypeSelection(selectionSet)
}
