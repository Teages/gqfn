import type { RequireQueryPart } from '#gqfn'

const endpoint = 'https://graphql-test.teages.xyz/graphql-user'

const schema = useGQFnSchema(endpoint)
const { defineAsyncQuery } = withGQFnClient(
  schema,
)

export const userFragment = schema
  .gqp('fragment UserFragment', 'on User', [
    'name',
    'id',
  ])
export type RequireUserFragment = RequireQueryPart<typeof userFragment>

export const useAsyncUser = defineAsyncQuery(
  gqfn => gqfn('query QueryUser', {
    id: 'ID',
  }, [{
    user: $ => $({ id: $.id }, [{ ...userFragment($) }]),
  }]),
)
