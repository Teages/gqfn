/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf } from '../src'

console.log(print(gqf('mutation Login', {
  username: 'String!',
  password: $ => $('String!', [
    ['@check', { rule: $('password') }],
  ]),
  withUserData: 'Boolean! = true',
  skipToken: 'Boolean! = false',
  captchaType: 'CaptchaEnum! = google',
}, [{
  login: $ => $({
    username: $.username,
    password: $.password,
  }, [
    $ => $('token', [['@skip', { if: $.skipToken }]]),
    {
      '...': $ => $([
        'id',
        'name',
        'email',
      ], [['@include', { if: $.withUserData }]]),
    },
  ]),
}], [
  ['@captcha', $ => ({ provider: $.captchaType })],
  ['@cors', { host: 'teages.xyz' }],
])))
