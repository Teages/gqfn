/* eslint-disable no-console */

import { print } from 'graphql'
// import { sync } from '@teages/gqf/cli'
import { useSchema } from '@teages/gqf'

console.log('working...')

const { gqf } = useSchema('https://services.cytoid.io/graphql')

const query = gqf('query', [{
  levels: $ => $({}, [
    'id',
    'title',
  ]),
}])
