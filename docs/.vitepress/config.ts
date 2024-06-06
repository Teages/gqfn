import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@teages/gqf',
  description: 'GraphQL Queries with Function',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teages/gqf' },
    ],

    search: { provider: 'local' },
  },
})
