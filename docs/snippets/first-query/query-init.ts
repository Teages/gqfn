import { useSchema } from '@gqfn/core'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useSchema(endpoint)
// ---cut---
const query = gqfn([])
