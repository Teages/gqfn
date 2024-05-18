/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf } from '../src'
import { withDirective } from '../src/core'

console.log(print(gqf('mutation Login', {
  username: 'String!',
  password: withDirective([
    ['@check', { rule: 'password' }],
  ], 'String!'),
  withUserData: 'Boolean! = true',
}, [{
  login: $ => $({
    username: $.username,
    password: $.password,
  }, [
    'token',
    {
      '...': withDirective([
        ['@include', { if: $.withUserData }],
      ], [{
        user: [
          'id',
          'name',
          'email',
        ],
      }]),
    },
  ]),
}])))
