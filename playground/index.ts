/* eslint-disable no-console */

import { print } from 'graphql'
import { $enum, gqf as _gqf } from '../src'
import type { GraphQueryFunction } from '../src/typed/query-func'
import type { ParseVariables } from '../src/typed/variable'
import type { ArgOf, Enum, Field, ParseArg, ParseGqfType, Scalar, TypeObject } from '../src/schema'
import type { ResultOf } from '../src/typed/document-node'
import type { EmptyRecord, Nullable, Values } from '../src/utils/object'
import type { DollarContext } from '../src/typed/dollar'
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

const i1 = gqf([
  'hello',
  {
    'again:hello': $ => $({ name: 'again' }, true),
    'users': $ => $([
      'id',
      {
        // 'email': $ => $(true, [['@skip', { if: true }]]),
        '...': $ => $([
          'name',
          'email',
        ], [['@skip', { if: true }]]),
      },
    ]),
  },
])
console.log(print(i1))

type I1Res = ResultOf<typeof i1>

type I1ResP = I1Res

const a: I1ResP = null as any
const b = a.users[0]
