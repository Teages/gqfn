import module from '../../../src/module'

export default defineNuxtConfig({
  modules: [module],
  gqfn: {
    clients: [
      'http://localhost:64961/graphql',
    ],
  },
})
