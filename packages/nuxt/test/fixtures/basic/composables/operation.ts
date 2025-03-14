import type { RequireOperationPartialData } from '#gqfn'

const endpoint = 'https://graphql-test.teages.xyz/graphql-user'

const gqfn = useGQFnSchema(endpoint)
const { defineAsyncQuery } = useGraphQLClient(endpoint)

export const userFragment = gqfn
  .partial('fragment UserFragment', 'on User', [
    'name',
    'id',
  ])
export type RequireUserFragment = RequireOperationPartialData<typeof userFragment>

export const useAsyncUser = defineAsyncQuery(
  gqfn('query QueryUser', {
    id: 'ID',
  }, [{
    user: $ => $({ id: $.id }, [{ ...userFragment($) }]),
  }]),
)
