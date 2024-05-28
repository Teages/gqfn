/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf as _gqf } from '../src'
import type { GraphQueryFunction } from '../src/typed/query-func'
import type { ProvideSelectionFieldContext, ProvideSimpleSelectionKeys, ProvideTypeSelection, ProvideTypeSelectionObject, ProvideTypeSelectionObjectFields, ProvideTypeSelectionObjectInlineFragment } from '../src/typed/select'
import type { ArrayMayFollowItem, EmptyRecord, Exact } from '../src/utils/object'
import type { DollarContext, SelectionDollar, SelectionDollarFunctionWithoutArgs } from '../src/typed/dollar'
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
  sayings: $ => $({ category: [$('funny')] }, []),
  user: $ => $({
    id: 0,
  }, ['id', {
    id: true,
  }]),
})
const p1 = i1.user(null as any)
type I4 = ProvideTypeSelectionObjectInlineFragment<
  Schema['Objects']['User'],
  EmptyRecord
>

type I5 = keyof Schema['Objects']['User']['Types']

const i4: I4 = {
  '...': [],
}

type F = Schema['Objects']['Query']['Fields']['users']
type User = Schema['Objects']['User']
type I2 = ProvideSelectionFieldContext<F, EmptyRecord>
// type I2 = [...ProvideSimpleSelectionKeys<User>[], ProvideTypeSelectionObject<User, EmptyRecord>]
// type I2 = ArrayMayFollowItem< 'id' | 'name', { id?: true, name?: true }>
const $ = <T extends I2>(t: Exact<I2, T>) => t
const dollarRes = $(['id', {
  id: true,
  some: true,
}])
const I20 = dollarRes[0]

type P3 = ProvideSimpleSelectionKeys<User>
type P4 = ProvideTypeSelectionObject<User, EmptyRecord>
