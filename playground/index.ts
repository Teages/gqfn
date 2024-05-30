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
console.log(print(i0))

const UserPart = gqp('fragment', 'on User', ['name'])
const i1 = gqf([
  'hello',
  {
    'again:hello': $ => $({ name: 'again' }, true),
    'users': $ => $([
      'id',
      {
        '__typename': true,
        // 'email': $ => $(true, [['@skip', { if: true }]]),
        '...': $ => $([
          'email',
          'name',
        ], [['@skip', { if: true }]]),
        ...UserPart($),
      },
    ]),
    'all': $ => $([
      '__typename',
      {
        '... on User': $ => $(['id']),
      },
    ]),
  },
])
console.log(print(i1))

type _I1Res = ResultOf<typeof i1>
type _UserReq = RequireQueryPart<typeof UserPart>

const res: _I1Res = null as any
