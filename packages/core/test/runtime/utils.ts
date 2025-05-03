import type { DocumentNode } from '@0no-co/graphql.web'
import { parse, print } from '@0no-co/graphql.web'
import { expect } from 'vitest'

export function fixture(
  expectedGetter: (gql: typeof gqlFunc) => DocumentNode,
  data: DocumentNode,
) {
  return () => {
    const expected = expectedGetter(gqlFunc)
    expect(print(clean(data))).toBe(print(clean(expected)))
  }
}

function gqlFunc(str: string): DocumentNode {
  return parse(str, { noLocation: true })
}

function clean(obj: DocumentNode): DocumentNode {
  return JSON.parse(JSON.stringify(
    obj,
    (key, value) => {
      if (key === 'loc') {
        return undefined
      }
      if (Array.isArray(value) && value.length === 0) {
        return undefined
      }
      return value
    },
  ))
}
