import type { DocumentNode } from 'graphql'
import { parse } from 'graphql'
import { hash, murmurHash } from 'ohash'
import { expect } from 'vitest'

export function fixture(
  expectedGetter: (gql: typeof gqlFunc) => DocumentNode,
  data: DocumentNode,
) {
  return () => {
    const result = expectedGetter(gqlFunc)
    expect(clean(data)).toMatchObject(clean(result))
  }
}

function gqlFunc(str: string): DocumentNode {
  return parse(str, { noLocation: true })
}

function clean(obj: DocumentNode): DocumentNode {
  return sortObject(JSON.parse(JSON.stringify(
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
  )))
  function sortObject(obj: any): any {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = sortObject(obj[i])
      }
      obj.sort(
        (a, b) => getNumHash(a) - getNumHash(b),
      )
    }
    else if (typeof obj === 'object' && obj !== null) {
      const keys = Object.keys(obj).sort((a, b) => getNumHash(a) - getNumHash(b))
      const sortedObj: { [key: string]: any } = {}
      keys.forEach((key) => {
        sortedObj[key] = sortObject(obj[key])
      })
      return sortedObj
    }
    return obj

    function getNumHash(obj: any) {
      if (typeof obj === 'number') {
        return obj
      }
      return murmurHash(hash(obj))
    }
  }
}
