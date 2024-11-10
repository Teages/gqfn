import { type DefinitionNode, Kind } from 'graphql'

export interface Context {
  definitions: DefinitionNode[]
  pushDefinitionNode: (node: DefinitionNode) => void
}

export function createContext(): Context {
  const definitions: DefinitionNode[] = []

  return {
    definitions,
    pushDefinitionNode: (node: DefinitionNode) => {
      switch (node.kind) {
        case Kind.FRAGMENT_DEFINITION: {
          // if there is already a fragment with the same name, ignore it
          const existing = definitions.find(
            d => d.kind === Kind.FRAGMENT_DEFINITION
              && d.name.value === node.name.value,
          )
          if (existing) {
            return
          }
          break
        }
        case Kind.OPERATION_DEFINITION: {
          // if there is already an operation, throw an error
          const existing = definitions.find(
            d => d.kind === Kind.OPERATION_DEFINITION,
          )
          if (existing) {
            throw new Error('Multiple operations are not supported')
          }
          break
        }

        default: {
          throw new Error(`Unexpected definition node kind: ${node.kind}`)
        }
      }

      definitions.push(node)
    },
  }
}
