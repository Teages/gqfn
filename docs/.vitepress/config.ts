import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { dirname, resolve } from 'pathe'
import ts from 'typescript'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GQFn',
  description: 'GraphQL Queries with Function',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Document',
        link: '/introduction/installation',
        activeMatch: '^/(introduction|features|packages)/',
      },
      {
        text: 'Reference',
        link: '/reference/runtime-core',
        activeMatch: '^/reference',
      },
    ],

    sidebar: {
      '/': [
        {
          collapsed: false,
          base: '/introduction/',
          text: 'Introduction',
          link: '/installation',
          items: [
            { text: 'What is GQFn?', link: '/' },
            { text: 'Installation', link: '/installation' },
            { text: 'Prepare Schema', link: '/prepare-schema' },
            { text: 'Write Your First Query', link: '/write-your-first-query' },
          ],
        },
        {
          collapsed: false,
          base: '/features/',
          text: 'Features',
          link: '/query',
          items: [
            { text: 'Operation', link: '/query' },
            { text: 'Fragment', link: '/fragment' },
            { text: 'Partial Query', link: '/partial-query' },
          ],
        },
        {
          collapsed: false,
          base: '/packages/',
          text: 'Packages',
          link: '/core',
          items: [
            { text: 'Core', link: '/core' },
            { text: 'Cli', link: '/cli' },
            { text: 'Nuxt Module', link: '/nuxt' },
          ],
        },
      ],
      '/reference/': [{
        collapsed: false,
        base: '/reference/',
        text: 'Reference',
        link: '/runtime-core',
        items: [
          { text: 'Core Runtime', link: '/runtime-core' },
          { text: 'Typed Document Node', link: '/typed-document-node' },
          { text: 'Typed Core', link: '/typed-core' },
          { text: 'Schema', link: '/schema' },
          { text: 'Operation', link: '/operation' },
          { text: 'Selection', link: '/selection' },
          { text: 'Variable', link: '/variable' },
          { text: 'Enum', link: '/enum' },
          { text: 'Dollar', link: '/dollar' },
          { text: 'Directive', link: '/directive' },
        ],
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teages/gqfn' },
    ],

    search: { provider: 'local' },
  },

  cleanUrls: true,

  markdown: {
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            moduleResolution: ts.ModuleResolutionKind.Bundler,
          },
          extraFiles: getSchemaFiles(),
        },
      }),
    ],
  },
})

// scan files from ~/packages/core/playground/gqfn
function getSchemaFiles(): Record<string, string> {
  const schemaDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../packages/core/playground/gqfn')
  const schemaPaths = fs.readdirSync(schemaDir).map(file => `${schemaDir}/${file}`)
  return Object.fromEntries(
    schemaPaths.map((path) => {
      const content = fs.readFileSync(path, 'utf-8')
      return [path, content]
    }),
  )
}
