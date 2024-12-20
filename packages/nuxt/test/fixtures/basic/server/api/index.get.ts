import type { ResultOf } from '#gqfn'
import { print } from 'graphql'

export default defineLazyEventHandler(() => {
  const endpoint = 'https://graphql-test.teages.xyz/graphql-user'

  const gqfn = useGQFnSchema(endpoint)
  const query = gqfn('query FetchAnime', [{
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
