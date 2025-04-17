import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  silent: false,
  clients: [
    'https://graphql-test.teages.xyz/graphql-user',
    'https://services.cytoid.io/graphql',
    'https://graphql.anilist.co',
    'https://countries.trevorblades.com',
    {
      url: '/test-fixtures/graphql',
      loader: {
        type: 'path',
        value: '../../cli/test/fixtures/local/schema.ts',
      },
    },
  ],
})
