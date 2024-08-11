import module from '../../../src/module'

export default defineNuxtConfig({
  modules: [module],
  gqfn: {
    clients: [
      'https://graphql-test.teages.xyz/graphql-user',
    ],
  },
})
