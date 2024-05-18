# Configuration

## Type Definition

```ts
interface Config {
  clients: (
    | string // the url of endpoint
    | {
      url: string // the url of endpoint
      method?: 'GET' | 'POST' // method to request the schema
      headers?: Record<string, string> // custom headers
      schemaOverride?: string | undefined // path to schema file, will use local file if provided
    }
  )[]
  output: string // output directory
  silent: boolean // disable console output
}
```
