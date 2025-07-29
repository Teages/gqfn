# @gqfn/nuxt

The Nuxt module for GQFn.

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
