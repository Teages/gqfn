export default defineNuxtConfig({
  modules: ['../src/module'],
  gqfn: {
    clients: [
      'https://graphql-test.teages.xyz/graphql-user',
    ],
  },
  devtools: { enabled: true },
})
