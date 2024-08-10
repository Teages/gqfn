export default defineNuxtConfig({
  modules: ['../src/module'],
  gqf: {
    clients: [
      'https://graphql-test.teages.xyz/graphql-user',
    ],
  },
  devtools: { enabled: true },
})
