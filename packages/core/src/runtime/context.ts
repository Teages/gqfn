import type { ExecutableDefinitionNode } from 'graphql'
import { Kind } from 'graphql'

export interface DocumentNodeContext {
  definitions: ExecutableDefinitionNode[]
  pushDefinitionNode: (...nodes: ExecutableDefinitionNode[]) => void
}

export function createDocumentNodeContext(): DocumentNodeContext {
  const definitions: ExecutableDefinitionNode[] = []
  let hasOperation = false
  const fragmentNodeNames = new Set<string>()

  return {
    definitions,
    pushDefinitionNode: (...nodes: ExecutableDefinitionNode[]) => {
      nodes.forEach((node) => {
        switch (node.kind) {
          case Kind.FRAGMENT_DEFINITION: {
            // if there is already a fragment with the same name, ignore it
            if (fragmentNodeNames.has(node.name.value)) {
              return
            }
            fragmentNodeNames.add(node.name.value)
            break
          }
          case Kind.OPERATION_DEFINITION: {
            // if there is already an operation, throw an error
            if (hasOperation) {
              throw new Error('Unexpected multiple operations')
            }
            hasOperation = true
            break
          }
        }

        definitions.push(node)
      })
    },
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('createDocumentNodeContext', async () => {
    const { parse } = await import('graphql')
    const gql = (str: string) => parse(str, { noLocation: true })

    const ctx_0 = createDocumentNodeContext()
    expect(ctx_0.definitions).toMatchObject([])

    const ctx_1 = createDocumentNodeContext()
    ctx_1.pushDefinitionNode(gql(`
      fragment A on Type { field }
    `).definitions[0] as ExecutableDefinitionNode)
    expect(ctx_1.definitions).toMatchObject([gql(`
      fragment A on Type { field }
    `).definitions[0]])

    const ctx_2 = createDocumentNodeContext()
    Array.from({ length: 2 }).forEach(() => {
      ctx_2.pushDefinitionNode(gql(`
        fragment A on Type { field }
      `).definitions[0] as ExecutableDefinitionNode)
    })
    expect(ctx_2.definitions).toMatchObject([gql(`
      fragment A on Type { field }
    `).definitions[0]])

    const ctx_3 = createDocumentNodeContext()
    ctx_3.pushDefinitionNode(gql(`
      query Hello { field }
    `).definitions[0] as ExecutableDefinitionNode)
    expect(ctx_3.definitions).toMatchObject([gql(`
      query Hello { field }
    `).definitions[0]])

    const ctx_4 = createDocumentNodeContext()
    expect(() =>
      Array.from({ length: 2 }).forEach(() => {
        ctx_4.pushDefinitionNode(gql(`
          query Hello { field }
        `).definitions[0] as ExecutableDefinitionNode)
      }),
    ).toThrow('Unexpected multiple operations')
  })
}
