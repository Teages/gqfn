# @gqfn/cli

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

The CLI tool for GQFn - provides commands to initialize, manage, and sync GraphQL schemas for @gqfn/core.

- 📖 [Documentation](https://gqfn.teages.xyz)

## Installation

Install the CLI package globally or locally in your project:

```sh
# ✨ Auto-detect
npx nypm i @gqfn/cli

# npm
npm install @gqfn/cli

# yarn
yarn add @gqfn/cli

# pnpm
pnpm install @gqfn/cli

# bun
bun install @gqfn/cli
```

For global installation:

```sh
npm install -g @gqfn/cli
```

## Usage

### Initialize GQFn in your project

```bash
gqfn init
```

This command creates the necessary configuration files and sets up your project for GQFn usage.

### Add a GraphQL schema

```bash
gqfn add https://your-graphql-endpoint.com/graphql
```

You can add multiple endpoints at once:

```bash
gqfn add https://api.example.com/graphql https://graphql.example.com/v1
```

### Sync schemas

```bash
gqfn sync
```

This command fetches the latest schema definitions from all configured endpoints and updates the generated types.

### Command Options

All commands support the following options:

- `-s, --silent`: Disable all output
- `--ignore-error` (sync only): Ignore errors when syncing the schema

### Configuration

The CLI uses a `gqfn.config.ts` file for configuration. Here's an example:

```ts
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  clients: [
    {
      name: 'api',
      url: 'https://your-graphql-endpoint.com/graphql',
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN'
      }
    }
  ],
  outputDir: './src/gqfn'
})
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gqfn/cli?style=flat&color=blue
[npm-version-href]: https://npmjs.com/package/@gqfn/cli
[npm-downloads-src]: https://img.shields.io/npm/dm/@gqfn/cli?style=flat&color=blue
[npm-downloads-href]: https://npmjs.com/package/@gqfn/cli
