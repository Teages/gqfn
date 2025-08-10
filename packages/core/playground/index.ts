/* eslint-disable no-console */
/* eslint-disable antfu/no-top-level-await */

import { useSchema } from '@gqfn/core'
import { createClient } from '@teages/oh-my-graphql'
import { print } from 'graphql'

const endpoint = 'https://graphql.anilist.co'
const schema = useSchema(endpoint)

const client = createClient(endpoint)

const query = schema.gqfn('query FetchAnime', {
  id: 'Int = 127549',
}, [{
  Media: $ => $({ id: $.vars.id, type: schema.enum('ANIME') }, [
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

const res = await client.request(query, { })
console.log('result:', JSON.stringify(res, null, 2))
