# Setting Up Your GraphQL Schema

Due to the complexity limitations of TypeScript, GQFn cannot directly interpret your GraphQL schema definitions. To enable type-safe operations, you need to provide GQFn with type definitions for your GraphQL schema.

However, you do not need to write these definitions manually. GQFn provides a CLI tool that will automatically generate the required type definitions for you.

## 1. Initialize GQFn Cli Configuration

Install the CLI as a development dependency:

```bash
pnpm add -D @gqfn/cli
```

Then initialize the configuration file:

```bash
pnpm gqfn init
```

This will create a `gqfn.config.ts` file in your project root:

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: './gqfn',
})
```

## 2. Configure Your Schema Source

Update your config to specify your GraphQL endpoint:

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  clients: ['https://your-graphql-endpoint.com/graphql'],
})
```

## 3. Generate Type Definitions

Once configured, generate types and schema files by running:

```bash
pnpm gqfn sync
```

The generated types and schema files will appear in your `output` directory.
