/* eslint-disable no-console */

import { print } from 'graphql'
import type { RequireQueryPart, ResultOf } from '../src'
import { $enum, defineGqf } from '../src'
import type { Schema } from './schema'

const { gqf, gqp } = defineGqf<Schema>()

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
      category: $enum('funny'),
      // category: $.category,
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

const UserPart = gqp('fragment', 'on User', ['name'])

const i1 = gqf([
  'hello',
  {
    'again:hello': $ => $({ name: 'again' }, true),
    'users': $ => $([
      'id',
      {
        'email': $ => $(true, [['@skip', { if: true }]]),
        '...': $ => $([
          'email',
        ], [['@skip', { if: true }]]),
        ...UserPart($),
      },
    ]),
  },
])
console.log(print(i1))

type I1Res = ResultOf<typeof i1>
type UserReq = RequireQueryPart<typeof UserPart>
