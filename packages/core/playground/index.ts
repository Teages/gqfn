/* eslint-disable no-console */
/* eslint-disable antfu/no-top-level-await */

import { useGQFnSchema } from '@gqfn/core'
import { createClient } from '@teages/oh-my-graphql'
import { print } from 'graphql'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useGQFnSchema(endpoint)

const client = createClient(endpoint)

const query = gqfn('query FetchAnime', {
  id: 'Int = 127549',
}, [{
  Media: $ => $({ id: $.id, type: gqfn.enum('ANIME') }, [
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

console.log('query:', print(query))

const res = await client.request(print(query), { })
console.log('result:', JSON.stringify(res, null, 2))
