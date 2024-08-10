/* eslint-disable no-console */
import { print } from 'graphql'
import { useSchema } from '@teages/gqf'
import { createClient } from '@teages/oh-my-graphql'

const endpoint = 'https://graphql.anilist.co'
const { gqf, $enum } = useSchema(endpoint)

const client = createClient(endpoint)

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

console.log('query:', print(query))

const res = await client.request(print(query), { })
console.log('result:', JSON.stringify(res, null, 2))
