# @gqfn/cli

A command-line interface tool for managing GraphQL schemas with @gqfn/core.

## Installation

```bash
npm install -g @gqfn/cli
```

Or use with npx:

```bash
npx @gqfn/cli
```

## Commands

### `init`

Initialize a new @gqfn configuration file in your project.

```bash
gqfn init [options]
```

**Options:**
- `-s, --silent` - Disable all output

This command creates a `gqfn.config.ts` file with default configuration:

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: './gqfn',
})
```

### `add`

Add new GraphQL schema URLs to your configuration.

```bash
gqfn add <urls...> [options]
```

**Arguments:**
- `<urls...>` - One or more GraphQL schema URLs to add

**Options:**
- `-s, --silent` - Disable all output

**Example:**
```bash
gqfn add https://api.example.com/graphql https://api2.example.com/graphql
```

### `sync`

Synchronize GraphQL schemas from configured clients and generate TypeScript definitions.

```bash
gqfn sync [options]
```

**Options:**
- `--ignore-error` - Continue execution even if some schemas fail to sync
- `-s, --silent` - Disable all output

This command:
1. Reads your configuration file
2. Fetches schemas from all configured clients
3. Generates TypeScript definition files in the output directory
4. Names files using the pattern: `{hostname}_{hash}.d.ts`

## Configuration

The CLI uses a configuration file (`gqfn.config.ts` or `gqfn.config.js`) to define:

- **clients**: Array of GraphQL endpoints or client configurations
- **output**: Directory where generated types will be saved (default: `./gqfn`)

**Example configuration:**

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  clients: [
    'https://api.example.com/graphql',
    {
      url: 'https://api2.example.com/graphql',
      loader: {
        type: 'sdl',
        value: '...' // SDL string
      }
    }
  ],
  output: './generated/gqfn'
})
```

## Programmatic Usage

You can also use the CLI functions programmatically:

```typescript
import { init, add, sync } from '@gqfn/cli'

// Initialize configuration
await init({ silent: false })

// Add clients
await add({
  clients: ['https://api.example.com/graphql'],
  silent: false
})

// Sync schemas
await sync({
  ignoreError: false,
  silent: false
})
```

## Generated Files

The sync command generates TypeScript definition files with names based on the schema URL:

- `api.example.com_abc123.d.ts` - For `https://api.example.com/graphql`
- `localhost_def456.d.ts` - For `http://localhost:4000/graphql`

Each file contains the complete TypeScript definitions for that GraphQL schema, ready to use with @gqfn/core.

## Error Handling

By default, the CLI stops execution if any schema fails to sync. Use the `--ignore-error` flag with the `sync` command to continue processing other schemas even if some fail.

## Examples

**Complete workflow:**

```bash
# Initialize project
gqfn init

# Add GraphQL endpoints
gqfn add https://countries.trevorblades.com/graphql

# Sync schemas and generate types
gqfn sync
```

**Silent operation:**

```bash
gqfn sync --silent --ignore-error
```
