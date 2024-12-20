import { useGQFnSchema } from '@gqfn/core'
import { request } from 'graphql-request'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useGQFnSchema(endpoint)
// ---cut---
const query = gqfn([{
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

const data = await request(endpoint, query)
const id = data.Media?.id
const nativeTitle = data.Media?.title?.native
