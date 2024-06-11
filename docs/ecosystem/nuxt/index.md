# Installation

1. Add `@teages/nuxt-gqf` dependency to your project

::: code-group
```bash [nypm]
# ✨ Auto-detect
npx nypm install @teages/nuxt-gqf
```

```bash [npm]
# Using npm
npm install @teages/nuxt-gqf
```

```bash [yarn]
# Using yarn
yarn add @teages/nuxt-gqf
```

```bash [pnpm]
# Using pnpm
pnpm add @teages/nuxt-gqf
```

```bash [bun]
# Using bun
bun install @teages/nuxt-gqf
```
:::

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

That's all, now you can use [`useSchema`](./schema) in your nuxt app.

:::tip
We will release the module to Nuxt Modules soon.
:::
