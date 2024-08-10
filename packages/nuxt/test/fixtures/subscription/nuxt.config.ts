import module from '../../../src/module'

export default defineNuxtConfig({
  modules: [module],
  gqf: {
    clients: [
      'http://localhost:64961/graphql',
    ],
  },
})
