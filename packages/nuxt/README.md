# @gqfn/nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The Nuxt binding for @gqfn/core.

<!-- - 🏀 [Online playground](#) TODO: new playground -->
- 📖 [&nbsp;Documentation](https://gqfn.teages.xyz/ecosystem/nuxt)

## Features

<!-- Highlight some of the features your module provide here -->
- 🔒 &nbsp;Write queries with type safety and type hints.
- 🚀 &nbsp;No need to scan your source code, no code generation during HMR.
- ❤️ &nbsp;The experience of using gqfn is very similar to writing plain GraphQL queries.
- 🌐 &nbsp;Working for most clients with TypedDocumentNode.

## Quick Setup

1. Add `@gqfn/nuxt` dependency to your project

```bash
# ✨ Auto-detect
npx nypm install @gqfn/nuxt

# Using npm
npm install @gqfn/nuxt

# Using yarn
yarn add @gqfn/nuxt

# Using pnpm
pnpm add @gqfn/nuxt

# Using bun
bun install @gqfn/nuxt
```

2. Add `@gqfn/nuxt` to the `modules` section of `nuxt.config.ts`, and configure it:

```ts
export default defineNuxtConfig({
  modules: [
    '@gqfn/nuxt'
  ],

  gqfn: {
    clients: [
      'https://your-graphql-endpoint',
    ],
  },
})
```

<!-- TODO: Add the module to Nuxt Modules Store
Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @gqfn/nuxt
```

That's it! You can now use Nuxt GQFn in your Nuxt app ✨
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
[npm-version-src]: https://img.shields.io/npm/v/@gqfn/nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@gqfn/nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@gqfn/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@gqfn/nuxt

[license-src]: https://img.shields.io/npm/l/@gqfn/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@gqfn/nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
