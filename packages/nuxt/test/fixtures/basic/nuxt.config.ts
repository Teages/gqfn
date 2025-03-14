import module from '../../../src/module'

export default defineNuxtConfig({
  modules: ['@teages/nuxt-simple-graphql-client', module],
  gqfn: {
    clients: [
      'https://graphql-test.teages.xyz/graphql-user',
    ],
  },
})
