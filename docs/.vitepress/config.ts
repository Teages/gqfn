import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import ts from 'typescript'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@teages/gqf',
  description: 'GraphQL Queries with Function',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Ecosystem', link: '/ecosystem/' },
    ],

    sidebar: {
      '/': [
        {
          collapsed: false,
          base: '/guide/',
          text: 'Introduction',
          link: '/',
          items: [
            { text: 'Getting Started', link: '/' },
            // { text: 'Why GQF?', link: '/why' },
            { text: 'First Query', link: '/first-query' },
          ],
        },
        {
          collapsed: false,
          base: '/typed/',
          text: 'Typed Query Builder',
          link: '/',
          items: [
            { text: 'Typed Document Node', link: '/typed-document-node' },
            { text: 'Typed Query Builder', link: '/' },
            { text: 'Schema', link: '/schema' },
          ],
        },
        {
          collapsed: false,
          base: '/core/',
          text: 'Query Builder',
          link: '/',
          items: [
            { text: 'Query Builder', link: '/' },
            { text: 'Selection', link: '/selection' },
            { text: 'Enum', link: '/enum' },
            { text: '$ and Dollar Function', link: '/dollar' },
            { text: 'Query Part', link: '/part' },
            { text: 'Directive', link: '/directive' },
          ],
        },
        {
          collapsed: false,
          base: '/cli/',
          text: 'Schema Loader CLI',
          link: '/',
          items: [
            { text: 'Schema Loader CLI', link: '/' },
            { text: 'Command Line', link: '/command' },
            { text: 'Programmatic Usage', link: '/programmatic' },
            { text: 'Configuration', link: '/config' },
          ],
        },
        {
          text: 'Ecosystem',
          link: '/ecosystem/',
        },
      ],
      '/ecosystem/': [
        {
          text: 'Overview',
          link: '/ecosystem/',
        },
        {
          collapsed: false,
          base: '/ecosystem/nuxt',
          text: 'Nuxt GQF',
          link: '/',
          items: [
            { text: 'Installation', link: '/' },
            { text: 'useGqfSchema', link: '/schema' },
            { text: 'Type Utils', link: '/types' },
            { text: 'withGqfClient', link: '/with-client' },
            { text: 'Nitro Server', link: '/server' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teages/gqf' },
    ],

    search: { provider: 'local' },
  },

  markdown: {
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            moduleResolution: ts.ModuleResolutionKind.Bundler,
            paths: {
              '@teages/gqf/*': ['./packages/core/src/*'],
              '@teages/gqf': ['./packages/core/src'],
              '#schema/*': ['./packages/core/playground/gqf/*'],
            },
          },
        },
      }),
    ],
  },
})
