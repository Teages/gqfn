import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useSchema(endpoint)
// ---cut---
const query = gqfn('query FetchAnime', {
  id: 'Int!',
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

const result = await request(endpoint, query, { id: 127549 })
