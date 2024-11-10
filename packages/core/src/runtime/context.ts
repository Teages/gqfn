import type { DefinitionNode } from 'graphql'

export interface Context {
  pushDefinitionNode: (node: DefinitionNode) => void
}
