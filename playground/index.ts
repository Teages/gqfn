/* eslint-disable no-console */

import { print } from 'graphql'
import { gqf, gqp } from '../src'

const UserFields = gqp('fragment UserFields', 'on User', {
  max: 'Int!',
}, () => ({
  name: true,
  friends: $ => $({
    max: $.max,
  }, [
    'id',
    'name',
    'email',
  ]),
}))

console.log(print(gqf('query FindUser', {
  name: 'String! = "Teages"',
  max: 'Int! = 5',
}, [{
  findUser: $ => $({
    name: $.name,
    role: $('ADMIN'),
  }, [
    'id',
    {
      '...': ['name'],
      ...UserFields($),
    },
  ]),
}])))
