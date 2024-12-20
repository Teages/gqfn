import { useGQFnSchema } from '@gqfn/core'

const endpoint = 'https://graphql.anilist.co'
const gqfn = useGQFnSchema(endpoint)
// ---cut---
const query = gqfn([])
