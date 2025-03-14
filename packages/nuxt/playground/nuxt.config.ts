export default defineNuxtConfig({
  modules: ['@teages/nuxt-simple-graphql-client', '../src/module'],
  gqfn: {
    clients: [
      'https://graphql-test.teages.xyz/graphql-user',
    ],
  },
  devtools: { enabled: true },
})
