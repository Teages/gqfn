import type { FieldNode, InlineFragmentNode, SelectionNode, SelectionSetNode } from 'graphql'
import { Kind } from 'graphql'
import type { ArrayMayFollowItem } from '../utils/object'
import { type Argument, parseArgs } from './arg'
import { type Dollar, type DollarPayload, initDollar } from './dollar'

export type TypeSelection<Var extends DollarPayload> = Exclude<SelectionContext<Var>, true>

export type SelectionSet<Var extends DollarPayload> =
  | SelectionContext<Var>
  | SelectionContextWithArguments<Var>

export type SelectionContextWithArguments<Var extends DollarPayload> = (
  $: Dollar<Var>
) => [Argument, SelectionContext<Var>]

export type SelectionContext<Var extends DollarPayload> =
  | ArrayMayFollowItem<string, SelectionObject<Var>>
  | Array<string>
  | true

export interface SelectionObject<Var extends DollarPayload> {
  [key: string]: SelectionSet<Var>
}

export function parseTypeSelection<
  Var extends DollarPayload,
>(
  selectionSet: TypeSelection<Var>,
): SelectionSetNode {
  const selections: Array<SelectionNode> = []

  const last = selectionSet[selectionSet.length - 1]
  const items = selectionSet.slice(0, -1) as Array<string>
  const selects: SelectionObject<Var> = typeof last === 'string'
    ? { [last]: true }
    : { ...last }
  items.forEach((item) => {
    selects[item] = true
  })

  Object.keys(selects).forEach((key) => {
    selections.push(parseSelection(key, selects[key]))
  })

  return {
    kind: Kind.SELECTION_SET,
    selections,
  } satisfies SelectionSetNode
}

export function parseSelection<
  Var extends DollarPayload,
>(
  key: string,
  selectionSet: SelectionSet<Var>,
): SelectionNode {
  if (typeof selectionSet === 'function') {
    if (key.startsWith('...')) {
      throw new Error('Unexpected dollar function on inline fragment')
    }
    const [arg, selection] = selectionSet(initDollar())
    const node = parseSelection(key, selection)
    if (node.kind !== Kind.FIELD) {
      throw new Error(`Expected field node, got ${node.kind}`)
    }
    return {
      ...node,
      arguments: parseArgs(arg),
    } satisfies FieldNode
  }

  // Inline Fragment
  if (key.startsWith('...')) {
    const type = key.startsWith('... on')
      ? /... on (\w+)/.exec(key)![1].trim()
      : undefined // self-referencing
    const context = parseSelectionContext(selectionSet)
    if (!context) {
      throw new Error('Unexpected field selection set for inline fragment')
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
      selectionSet: context,
      directives: [], // TODO: directives
    } satisfies InlineFragmentNode
  }

  // Field
  const { name, value } = parseAlias(key)
  return {
    kind: Kind.FIELD,
    directives: [], // TODO: directives
    arguments: [],
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
    selectionSet: parseSelectionContext(selectionSet),
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
  Var extends DollarPayload,
>(
  selectionSet: SelectionContext<Var>,
): SelectionSetNode | undefined {
  if (selectionSet === true) {
    return undefined
  }

  const selections: Array<SelectionNode> = []

  const last = selectionSet[selectionSet.length - 1]
  const items = selectionSet.slice(0, -1) as Array<string>

  const selects: SelectionObject<Var> = {}
  items.forEach((item) => {
    selects[item] = true
  })
  // put last item in last position
  if (typeof last === 'string') {
    selects[last] = true
  }
  else {
    Object.assign(selects, last)
  }

  Object.keys(selects).forEach((key) => {
    selections.push(parseSelection(key, selects[key]))
  })

  return {
    kind: Kind.SELECTION_SET,
    selections,
  } satisfies SelectionSetNode
}
