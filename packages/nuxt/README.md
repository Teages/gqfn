# Nuxt GQF

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt binding for @teages/gqf.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/Teages/nuxt-gqf?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://gqf.teages.xyz/ecosystem/nuxt)

## Features

<!-- Highlight some of the features your module provide here -->
- 🔒 &nbsp;Write queries with type safety and type hints.
- 🚀 &nbsp;No need to scan your source code, no code generation during HMR.
- ❤️ &nbsp;he experience of using gqf is very similar to writing plain GraphQL queries.
- 🌐 &nbsp;Working for most clients with TypedDocumentNode.

## Quick Setup

1. Add `@teages/nuxt-gqf` dependency to your project

```bash
# ✨ Auto-detect
npx nypm install @teages/nuxt-gqf

# Using npm
npm install @teages/nuxt-gqf

# Using yarn
yarn add @teages/nuxt-gqf

# Using pnpm
pnpm add @teages/nuxt-gqf

# Using bun
bun install @teages/nuxt-gqf
```

2. Add `@teages/nuxt-gqf` to the `modules` section of `nuxt.config.ts`, and configure it:

```ts
export default defineNuxtConfig({
  modules: [
    '@teages/nuxt-gqf'
  ],

  gqf: {
    clients: [
      'https://your-graphql-endpoint',
    ],
  },
})
```

<!-- TODO: Add the module to Nuxt Modules Store
Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @teages/nuxt-gqf
```

That's it! You can now use Nuxt GQF in your Nuxt app ✨
 -->
## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install

  # Generate type stubs
  npm run dev:prepare

  # Develop with the playground
  npm run dev

  # Build the playground
  npm run dev:build

  # Run ESLint
  npm run lint

  # Run Vitest
  npm run test
  npm run test:watch

  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@teages/nuxt-gqf/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@teages/nuxt-gqf

[npm-downloads-src]: https://img.shields.io/npm/dm/@teages/nuxt-gqf.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@teages/nuxt-gqf

[license-src]: https://img.shields.io/npm/l/@teages/nuxt-gqf.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@teages/nuxt-gqf

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
