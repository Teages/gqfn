import { Kind } from 'graphql'
import type { ConstDirectiveNode, DirectiveNode, ValueNode } from 'graphql'
import { type Argument, parseArgs } from './arg'

const directivesSymbol = Symbol('directives')
const nodeSymbol = Symbol('node')

export class DirectivePackage<T> {
  [directivesSymbol]: Array<Directive>
  [nodeSymbol]: T
  constructor(directives: Array<Directive>, node: T) {
    this[directivesSymbol] = directives
    this[nodeSymbol] = node
  }

  get value(): T {
    return this[nodeSymbol]
  }

  get directives(): ReadonlyArray<DirectiveNode> {
    return this[directivesSymbol].map(directive => ({
      kind: Kind.DIRECTIVE,
      name: {
        kind: Kind.NAME,
        value: directive.name.split('@')[1],
      },
      arguments: parseArgs(directive.args ?? {}),
    }))
  }

  get rawDirectives(): Array<Directive> {
    return this[directivesSymbol]
  }
}

export type AcceptDirective<T> = T | DirectivePackage<T>

export type DirectiveInput = [`@${string}`, Argument]
export interface Directive {
  name: string
  args: Argument
}

export function withDirective<T>(
  directives: DirectiveInput[],
  node: T,
): DirectivePackage<T> {
  return new DirectivePackage(directives.map(item => ({
    name: item[0],
    args: item[1],
  })), node)
}

export function exportDirective<T>(
  context: AcceptDirective<T>,
): {
    directives: Array<DirectiveInput>
    value: T
  } {
  if (!(context instanceof DirectivePackage)) {
    return { directives: [], value: context }
  }

  const value = context.value
  const directives = context.rawDirectives.map(item => [item.name, item.args] as DirectiveInput)

  return { directives, value }
}

export function parseDirective<T>(
  context: AcceptDirective<T>,
  constOnly?: false,
): {
  directives: ReadonlyArray<DirectiveNode>
  value: T
}
export function parseDirective<T>(
  context: AcceptDirective<T>,
  constOnly: true,
): {
  directives: ReadonlyArray<ConstDirectiveNode>
  value: T
}
export function parseDirective<T>(
  context: AcceptDirective<T>,
  constOnly: boolean = false,
): {
    directives:
      | ReadonlyArray<DirectiveNode>
      | ReadonlyArray<ConstDirectiveNode>
    value: T
  } {
  if (!(context instanceof DirectivePackage)) {
    return { directives: [], value: context }
  }

  const value = context.value
  const directives = context.directives

  if (constOnly) {
    // check if all directives are const node
    if (
      directives.some(
        directive => directive.arguments?.some(
          arg => !isConstNode(arg.value),
        ),
      )
    ) {
      throw new Error('Not all directives are const node')
    }
  }

  return { directives, value }
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
