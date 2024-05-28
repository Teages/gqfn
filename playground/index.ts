/* eslint-disable no-console */

import { print } from 'graphql'
import { $enum, gqf as _gqf } from '../src'
import type { GraphQueryFunction } from '../src/typed/query-func'
import type { ParseVariables } from '../src/typed/variable'
import type { ArgOf, ParseArg, ParseGqfType } from '../src/schema'
import type { Schema } from './schema'

const gqf = _gqf as GraphQueryFunction<Schema>

const i0 = gqf('mutation AddSaying', {
  ownerId: 'String!',
  content: $ => $('String!', [
    ['@check', {
      rule: 'md5',
      value: '123',
    }],
  ]),
  withSaying: 'Boolean! = true',
  skipToken: 'Boolean! = false',
  category: 'CategoryEnum! = funny',
}, [{
  addSaying: $ => $({
    input: {
      // category: $enum('funny'),
      category: $.category,
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

type I2 = ParseVariables<
  Schema,
  {
    a: 'String!'
  }
>

type I3 = ParseArg<ArgOf<Schema, 'String!'>, true>
type I4 = ParseGqfType<string>
