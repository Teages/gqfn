/* eslint-disable no-console */

import { print } from 'graphql'
import { $enum, gqf as _gqf } from '../src'
import type { GraphQueryFunction } from '../src/typed/query-func'
import type { Schema } from './schema'

const gqf = _gqf as GraphQueryFunction<Schema>

const i0 = gqf('mutation AddSaying', {
  ownerId: 'String!',
  content: $ => $('String!', [
    ['@check', {
      rule: 'pubKey',
      value: '0x123',
    }],
  ]),
  withSaying: 'Boolean! = true',
  skipToken: 'Boolean! = false',
  category: 'CategoryEnum! = funny',
}, [{
  addSaying: $ => $({
    input: {
      category: () => 'funny',
      content: 'Hello',
    },
    ownerId: 1,
  }, [
    '__typename',
    {
      owner: $ => $([
        'id',
      ]),
    },
  ]),
}], $ => [
  ['@operator', { userId: $.ownerId }],
  ['@cors', { host: 'teages.xyz' }],
])

const i1 = gqf(['hello'])

console.log(print(i1))
