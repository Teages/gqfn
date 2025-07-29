# Installation

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

That's it! You can now use GQFn in your project.

```typescript
import { useSchema } from '@gqfn/core'

const schema = useSchema()

/**
 * ```graphql
 * query SayHello {
 *   hello
 * }
 * ```
 */
const query = schema.gqfn('query SayHello', ['hello'])
```

## What's next?

By default GQFn have no schema. It will only provide the basic checks.
To use GQFn with a GraphQL schema, you need to add a schema URL, check out the guide: [Prepare Schema](./prepare-schema.md).
