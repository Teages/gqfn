/* eslint-disable no-console */
import { readFileSync } from 'node:fs'

// import { parseSchema } from '../src/schema/codegen/parse'
// import { print } from '../src/schema/codegen/print'
import { print } from 'graphql'
import { $enum, gqf, gqp } from '../src/core'

import { addClient, removeClient, sync } from '../src/cli/manager'

console.log('working...')

;(async () => {
  await addClient('https://graphql-test.teages.xyz/graphql-user')
})()

// const sdl = readFileSync('./playground/schema.graphql', 'utf8')

// const userFields = gqp(
//   'fragment UserFields',
//   'on Users',
//   [
//     'id',
//     'name',
//   ],
// )

// // console.log(print(parseSchema(sdl)))
// console.log(print(
//   gqf('query', {
//     varWithDirective: $ => $('String!', [
//       ['@exampleDirective', { arg: 'value' }],
//     ]),
//   }, ['hello']),
// ))
