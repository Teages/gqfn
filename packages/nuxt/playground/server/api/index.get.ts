import { print } from 'graphql'
import type { ResultOf } from '#gqf'

export default defineLazyEventHandler(() => {
  const endpoint = 'https://graphql-test.teages.xyz/graphql-user'

  const { gqf } = useGqfSchema(endpoint)
  const query = gqf('query FetchUser', [{
    users: $ => $([
      'id',
      'name',
      '__typename',
    ]),
  }])

  return defineEventHandler(async () => {
    const { data } = await $fetch<{ data: ResultOf<typeof query> }>(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        query: print(query),
      },
    })

    return { data }
  })
})
