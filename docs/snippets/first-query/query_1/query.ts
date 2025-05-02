import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useSchema(endpoint)
// ---cut---
const query = gqfn([{
  Media: $ => $({ id: 127549 }, [
    'id',
  ]),
}])

const data = await request(endpoint, query)
const id = data.Media?.id // it is typed!
