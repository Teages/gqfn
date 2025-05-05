// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-11',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl: 'https://gqfn.teages.xyz',
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    'nuxt-workers',
    '@teages/nuxt-simple-graphql-client',
    '@gqfn/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  eslint: { config: { standalone: false } },

  icon: { provider: 'iconify' },

  llms: {
    domain: 'https://gqfn.teages.xyz/',
    title: 'GQFn Docs',
    description: 'GraphQL just *typed* here.',
    full: {
      title: 'GQFn Docs',
      description: 'GraphQL just *typed* here.',
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' },
        ],
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' },
        ],
      },
    ],
  },
})
