# Getting Started

## Installation

Install package:

::: code-group
```bash [nypm]
# ✨ Auto-detect
npx nypm install @teages/gqf
```
```bash [npm]
npm install @teages/gqf
```
```bash [yarn]
yarn add @teages/gqf
```
```bash [pnpm]
pnpm install @teages/gqf
```
```bash [bun]
bun install @teages/gqf
```
:::

Generate Types from GraphQL Schema:

```bash
npm run gqf add https://your-graphql-endpoint
```

Import and use:

```ts
import { useSchema } from '@teages/gqf'
import { request } from 'graphql-request' // or any other GraphQL client

const { gqf, gqp, $enum } = useSchema('https://your-graphql-endpoint')

const query = gqf([
  'hello',
])

console.log(
  await request('https://your-graphql-endpoint', query)
)
```

## What's Next

Learn [how to write your first query](./first-query).
