import { print } from 'graphql'

export const {
  defineAsyncQuery,
} = useGraphQLClient('/graphql', {
  handler: async (query) => {
    const { data, errors } = await graphQLServer({
      query: print(query.document),
      variables: query.variables,
    })
    if (errors) {
      throw new Error('GraphQL Error', { cause: errors })
    }
    return data as any
  },
})
