# Installation

1. Add `@gqfn/nuxt` dependency to your project

::: code-group
```bash [nypm]
# ✨ Auto-detect
npx nypm install @gqfn/nuxt
```

```bash [npm]
# Using npm
npm install @gqfn/nuxt
```

```bash [yarn]
# Using yarn
yarn add @gqfn/nuxt
```

```bash [pnpm]
# Using pnpm
pnpm add @gqfn/nuxt
```

```bash [bun]
# Using bun
bun install @gqfn/nuxt
```
:::

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

That's all, now you can use [`useSchema`](./schema) in your nuxt app.

:::tip
We will release the module to Nuxt Modules soon.
:::
