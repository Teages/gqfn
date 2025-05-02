import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request' // or you favorite GraphQL client

const endpoint = 'https://graphql.anilist.co'
const gqfn = useSchema(endpoint)
