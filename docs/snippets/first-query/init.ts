import { useGQFnSchema } from '@gqfn/core'
import { request } from 'graphql-request' // or you favorite GraphQL client

const endpoint = 'https://graphql.anilist.co'
const gqfn = useGQFnSchema(endpoint)
