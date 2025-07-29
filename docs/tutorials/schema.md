# Prepare Schema

This guide explains how to configure and prepare your GraphQL schema for use with GQFn. You will learn how to fetch schemas from remote endpoints, use local schema files, manage multiple endpoints, and generate TypeScript types for a type-safe development experience.

## Schema Loading Methods

GQFn supports multiple ways to load your GraphQL schema. You can use string shortcuts for simple cases or detailed client configurations for advanced scenarios.

### 1. Simple String Configuration (Remote Endpoints)

The simplest way to configure a GraphQL endpoint is using a URL string:

```ts
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  clients: [
    'https://your-graphql-endpoint.com/graphql',
  ],
})
```

**How it works:**
- The CLI will introspect the remote endpoint and generate the necessary TypeScript types and schema files in the specified `output` directory.
- You can specify multiple endpoints in the `clients` array if needed.

### 2. Advanced Client Configuration

For more control over schema loading, you can use the detailed client configuration:

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  clients: [
    {
      url: 'https://your-graphql-endpoint.com/graphql',
      // Optional: Override schema loading behavior
      loader: {
        type: 'url',
        method: 'POST', // or 'GET'
        fetchOptions: {
          headers: {
            Authorization: 'Bearer your-token',
          },
        },
      },
      // Optional: Configure scalar types
      scalars: {
        DateTime: 'Date',
        JSON: {
          input: 'Record<string, any>',
          output: 'unknown',
        },
      },
    },
  ],
})
```

## Schema Loader Types

GQFn supports several types of schema loaders to fit different scenarios:

### File Loader (`type: 'path'`)

Load schema from a local file (JSON, SDL, or TypeScript/JavaScript):

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: '/local-endpoint',
    loader: {
      type: 'path',
      value: './path/to/your/schema.ts', // or .json, .graphql
      export: 'schema', // Optional: specify export name for JS/TS files
    },
  }]
})
```

**Supported file formats:**
- `.json` - GraphQL introspection JSON
- `.graphql` or `.gql` - SDL (Schema Definition Language)
- `.ts` or `.js` - TypeScript/JavaScript files exporting schema

**For TypeScript/JavaScript files:**
- Export the schema as default export or named export
- Prefer exporting the schema string instead of GraphQLSchema object
- Use the `export` field to specify the export name if not using default export

### SDL Loader (`type: 'sdl'` or `type: 'json'`)

Directly provide schema content as a string:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: '/inline-schema',
    loader: {
      type: 'sdl',
      value: `
      type Query {
        hello: String
      }
    `,
    },
  }]
})
```

Or for JSON introspection:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: '/inline-schema',
    loader: {
      type: 'json',
      value: JSON.stringify(introspectionResult),
    },
  }]
})
```

### URL Loader (`type: 'url'`)

Advanced configuration for fetching from remote endpoints:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: 'https://api.example.com/graphql',
    loader: {
      type: 'url',
      method: 'GET', // or 'POST' (default)
      override: 'https://different-introspection-endpoint.com',
      fetchOptions: {
        headers: {
          'Authorization': 'Bearer token',
          'X-API-Key': 'your-api-key',
        },
        timeout: 10000,
      },
    },
  }]
})
```

### Function Loader

Provide a custom function to load the schema:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: '/custom-loader',
    loader: async () => {
    // Your custom logic to fetch/generate schema
      const schema = await fetchSchemaFromDatabase()
      return schema
    },
  }]
})
```

## Scalar Type Configuration

Configure how GraphQL scalar types map to TypeScript types:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: 'https://api.example.com/graphql',
    scalars: {
    // Simple mapping - same type for input and output
      DateTime: 'Date',
      UUID: 'string',

      // Advanced mapping - different input/output types
      JSON: {
        input: 'Record<string, any>',
        output: 'unknown',
      },
      Upload: {
        input: 'File',
        output: 'never', // Upload scalars are typically input-only
      },
    },
  }]
})
```

## Managing Multiple Endpoints

You can configure multiple GraphQL endpoints (remote or local) in the same config file. This is useful for projects that interact with several GraphQL services.

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  clients: [
    // Simple string for remote endpoints
    'https://api1.example.com/graphql',
    'https://api2.example.com/graphql',

    // Advanced configuration for local schema
    {
      url: '/test-fixtures/graphql',
      loader: {
        type: 'path',
        value: '../../cli/test/fixtures/local/schema.ts',
      },
    },

    // Advanced configuration with custom scalars
    {
      url: 'https://api3.example.com/graphql',
      scalars: {
        DateTime: 'Date',
        JSON: 'Record<string, any>',
      },
    },
  ],
})
```

**Benefits:**
- Each client can have its own configuration and will generate types accordingly
- Mix and match different loading strategies (remote, local, custom)
- Configure different scalar mappings per endpoint

## Configuration Options

### Output Directory

The `output` field specifies where the generated files will be placed:

```typescript
export default defineConfig({
  output: 'gqfn', // Can be any directory name like 'types', 'generated', etc.
  // ... other config
})
```

### Silent Mode

Set `silent: true` to suppress CLI logs during schema generation:

```typescript
export default defineConfig({
  output: 'gqfn',
  silent: true, // Disable console output
  // ... other config
})
```

## Type Generation Workflow

1. **Configure** your schema sources in `gqfn.config.ts` as shown above
2. **Run** the GQFn CLI to fetch schemas and generate types:

   ```bash
   pnpm gqfn sync
   # or
   npx gqfn sync
   ```

3. **Use** the generated types and schema files from your output directory

## Advanced Use Cases

### Custom Fetch Configuration

For APIs requiring authentication or special headers:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: 'https://protected-api.example.com/graphql',
    loader: {
      type: 'url',
      fetchOptions: {
        headers: {
          'Authorization': 'Bearer your-jwt-token',
          'X-API-Key': 'your-api-key',
          'User-Agent': 'YourApp/1.0',
        },
        retry: 3,
        timeout: 15000,
      },
    },
  }]
})
```

### Development vs Production Schemas

Use different schemas for different environments:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [
    process.env.NODE_ENV === 'production'
      ? 'https://api.yourapp.com/graphql'
      : 'http://localhost:4000/graphql',
  ],
})
```

### Schema Validation and Testing

Load schemas from local files for testing:

```typescript
export default defineConfig({
  output: 'gqfn',
  clients: [{
    url: '/test-schema',
    loader: {
      type: 'path',
      value: './test/fixtures/schema.graphql',
    },
  }]
})
```

## Troubleshooting

### Common Issues

**Schema fetch failed:**
- Ensure your endpoint is accessible and supports introspection
- Check authentication and CORS settings
- Verify the endpoint URL is correct

**Type generation errors:**
- Check that your schema is valid GraphQL
- Ensure all scalar types are properly configured
- Verify file paths for local schema files

**Multiple endpoints conflicts:**
- Make sure each endpoint has a unique `url`
- Check for naming conflicts in generated types
- Consider using different output directories for different schemas

### Debugging Tips

1. **Enable verbose logging**: Set `silent: false` to see detailed CLI output
2. **Test endpoints manually**: Use GraphQL Playground or similar tools to verify your endpoints
3. **Check generated files**: Inspect the output directory to see what was generated
4. **Validate local schemas**: Use GraphQL tools to validate your local schema files

## Complete Example

Here's a comprehensive configuration example demonstrating various features:

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  silent: false,
  clients: [
    // Public API
    'https://countries.trevorblades.com',

    // Authenticated API
    {
      url: 'https://api.github.com/graphql',
      loader: {
        type: 'url',
        fetchOptions: {
          headers: {
            Authorization: 'Bearer github_pat_xxx',
          },
        },
      },
    },

    // Local development schema
    {
      url: '/local-dev',
      loader: {
        type: 'path',
        value: './schema.graphql',
      },
      scalars: {
        DateTime: 'Date',
        JSON: 'Record<string, any>',
        Upload: {
          input: 'File',
          output: 'never',
        },
      },
    },

    // Custom loader
    {
      url: '/dynamic-schema',
      loader: async () => {
        // Fetch schema from database or generate dynamically
        return await generateSchemaFromDatabase()
      },
    },
  ],
})
```

## Example: Full Configuration

Here's a comprehensive configuration example demonstrating various features:

```typescript
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: 'gqfn',
  silent: false,
  clients: [
    'https://graphql-test.teages.xyz/graphql-user',
    'https://services.cytoid.io/graphql',
    'https://graphql.anilist.co',
    'https://countries.trevorblades.com',
    {
      url: '/test-fixtures/graphql',
      loader: {
        type: 'path',
        value: '../../cli/test/fixtures/local/schema.ts',
      },
    },
  ],
})
```

---

For more details, see the [CLI documentation](../packages/cli.md) or visit the [GQFn repository](https://github.com/teages/gqfn).
