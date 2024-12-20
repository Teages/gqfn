import type { RequireOperationPartialData } from '#gqfn'

const endpoint = 'https://graphql-test.teages.xyz/graphql-user'
const schema = useGQFnSchema(endpoint)
const { defineAsyncQuery } = withGQFnClient(schema, {
  handler: {
    preferMethod: 'GET',
  },
})

export const userFragment = schema
  .partial('fragment UserFragment', 'on User', [
    'name',
    'id',
  ])
export type RequireUserFragment = RequireOperationPartialData<typeof userFragment>

export const useAsyncUser = defineAsyncQuery(
  gqfn => gqfn('query QueryUser', {
    id: 'ID',
  }, [{
    user: $ => $({ id: $.id }, [{ ...userFragment($) }]),
  }]),
)

export const useAsyncHello = defineAsyncQuery(
  gqfn => gqfn('query QueryHello', {
    name: 'String',
  }, [{
    hello: $ => $({ name: $.name }, true),
  }]),
)
