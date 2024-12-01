import { useGQFnSchema } from '@gqfn/core'
import { request } from 'graphql-request'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useGQFnSchema(endpoint)
// ---cut---
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

const result = await request(endpoint, query, {})
