/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf as _gqf } from '../src'
import type { GraphQueryFunction } from '../src/typed/query-func'
import type { ParseVariables, ProvideVariable } from '../src/typed/variable'
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
}, [], [
  ['@operator', $ => ({ userId: $.ownerId })],
  ['@cors', { host: 'teages.xyz' }],
])

console.log(print(i0))
