import module from '../../../src/module'

export default defineNuxtConfig({
  modules: [module],
  gqf: {
    clients: [
      'https://graphql-test.teages.xyz/graphql-user',
    ],
  },
})
