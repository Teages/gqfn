/* eslint-disable no-console */

import { print } from 'graphql'
import { useSchema } from '@teages/gqf'
import { request } from 'graphql-request'

console.log('working...')

const endpoint = 'https://graphql.anilist.co'
const { gqf, $enum } = useSchema(endpoint)

const query = gqf('query FetchAnime', {
  id: 'Int = 127549',
}, [{
  Media: $ => $({ id: $.id, type: $enum('ANIME') }, [
    'id',
    {
      title: $ => $([
        'romaji',
        'english',
        'native',
      ]),
    },
  ]),
}])

console.log(print(query))

const res = await request(endpoint, query, { })
console.log(JSON.stringify(res, null, 2))
