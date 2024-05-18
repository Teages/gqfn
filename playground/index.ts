/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf } from '../src'
import { withDirective } from '../src/core'

console.log(print(gqf('mutation Login', {
  username: 'String!',
  password: withDirective([
    ['@check', $ => ({ rule: $('password') })],
  ], 'String!'),
  withUserData: 'Boolean! = true',
  skipToken: 'Boolean! = false',
}, [{
  login: $ => $({
    username: $.username,
    password: $.password,
  }, [
    withDirective([
      ['@skip', { if: $.skipToken }],
    ], 'token'),
    {
      '...': withDirective([
        ['@include', { if: $.withUserData }],
      ], [{
        user: ['id', 'name', 'email'],
      }]),
    },
  ]),
}], [
  ['@captcha', $ => ({ provider: $('cloudflare') })],
])))
