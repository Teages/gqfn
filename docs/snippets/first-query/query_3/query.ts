import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useSchema(endpoint)
// ---cut---
const query = gqfn('query FetchAnime', [{
  Media: $ => $({ id: 127549, type: gqfn.enum('ANIME') }, [
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

const result = await request(endpoint, query)
