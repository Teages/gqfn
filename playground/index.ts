/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf as _gqf } from '../src'
import type { GraphQueryFunction } from '../src/typed/query-func'
import type { ProvideSelectionFieldContext, ProvideTypeSelectionObjectFields, ProvideTypeSelectionObjectInlineFragment } from '../src/typed/select'
import type { EmptyRecord } from '../src/utils/object'
import type { SelectionDollar, SelectionDollarFunctionWithoutArgs } from '../src/typed/dollar'
import type { ProvideSelectionArgument } from '../src/typed/argument'
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

}], [
  ['@operator', $ => ({ userId: $.ownerId })],
  ['@cors', { host: 'teages.xyz' }],
])

console.log(print(i0))

type I1 = ProvideTypeSelectionObjectFields<
  Schema['Objects']['Query'],
  EmptyRecord
>

const i1 = (<T extends I1>(t: T) => t)({
  sayings: $ => $({ }, [{}]),
  users: $ => $([
    'id',
    {
      id: true,
    },
  ], [
    ['@operator', { userId: '123' }],
  ]),
  allId: [
    'id',
    '__typename',
    {
      '... on Saying': [
        {
          createdAt: true,
          id: true,
        },
      ],
    },
  ],
})
i1.users(null as any)

;(<T extends I1>(t: T) => t)({
  sayings: $ => $({ }, [{}]),
  users: [
    'id',
    {
      saying: [{
        owner: [{
          '...': [
            {
              some: false,
            },
          ],
        }],
      }],
    },
  ],
})

type I4 = ProvideTypeSelectionObjectInlineFragment<
  Schema['Objects']['User'],
  EmptyRecord
>

type I5 = keyof Schema['Objects']['User']['Types']

const i4: I4 = {
  '...': [],
}

type T = Schema['Objects']['Query']['Fields']['users']
type I2 = ProvideSelectionFieldContext<T, EmptyRecord>
const $: SelectionDollarFunctionWithoutArgs<T, EmptyRecord> = null as any
