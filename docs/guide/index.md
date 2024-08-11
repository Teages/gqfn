# Getting Started

## Installation

Install package:

::: code-group
```bash [nypm]
# ✨ Auto-detect
npx nypm install @gqfn/core
```
```bash [npm]
npm install @gqfn/core
```
```bash [yarn]
yarn add @gqfn/core
```
```bash [pnpm]
pnpm install @gqfn/core
```
```bash [bun]
bun install @gqfn/core
```
:::

Generate Types from GraphQL Schema:

```bash
npm run gqfn add https://your-graphql-endpoint
```

Import and use:

```ts
import { useSchema } from '@gqfn/core'
import { request } from 'graphql-request' // or any other GraphQL client

const { gqfn, gqp, $enum } = useSchema('https://your-graphql-endpoint')

const query = gqfn([
  'hello',
])

console.log(
  await request('https://your-graphql-endpoint', query)
)
```

## What's Next

Learn [how to write your first query](./first-query).
