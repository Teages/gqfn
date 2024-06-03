import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@teages/gqf',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Reference', link: '/reference' },
    ],

    sidebar: {
      '/guide/': [],
      '/reference/': [
        {
          collapsed: false,
          base: '/reference/typed/',
          text: 'Typed Query Builder',
          link: '/',
          items: [
            { text: 'Typed Query Builder', link: '/' },
            { text: 'Typed Document Node', link: '/typed-document-node' },
            { text: 'Schema', link: '/schema' },
          ],
        },
        {
          collapsed: false,
          base: '/reference/core/',
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
        // {
        //   collapsed: false,
        //   base: '/reference/cli/',
        //   text: 'Schema Loader CLI',
        //   link: '/',
        //   items: [
        //   ],
        // },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
