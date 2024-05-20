import { Kind } from 'graphql'
import type { ConstDirectiveNode, DirectiveNode, ValueNode } from 'graphql'
import { type Argument, parseArgs } from './arg'
import type { DirectiveDollar, DollarPayload } from './dollar'

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

export type DirectiveInput = [
  `@${string}`,
  Argument,
]
export type DirectiveInputWithDollar<Var extends DollarPayload> = [
  `@${string}`,
  Argument | (($: DirectiveDollar<Var>) => Argument),
]

export interface Directive {
  name: `@${string}`
  args: Argument
}

export function parseDirective(
  directivesInput: Array<DirectiveInput>,
  constOnly?: false,
): ReadonlyArray<DirectiveNode>
export function parseDirective(
  directivesInput: Array<DirectiveInput>,
  constOnly: true,
): ReadonlyArray<ConstDirectiveNode>
export function parseDirective(
  directivesInput: Array<DirectiveInput>,
  constOnly: boolean = false,
): ReadonlyArray<DirectiveNode> | ReadonlyArray<ConstDirectiveNode> {
  const directivePackage = new DirectivePackage(directivesInput.map((item) => {
    const [name, args] = item
    return { name, args }
  }), {})

  const directives = directivePackage.directives
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
