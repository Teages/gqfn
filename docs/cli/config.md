# Configuration

## Type Definition

```ts
export interface Config {
  /**
   * The list of clients to generate types for.
   */
  clients: ClientConfig[]
  /**
   * Output directory for generated code.
   */
  output: string
  /**
   * Disable console output.
   */
  silent: boolean
}
export type ClientConfig =
  /**
   * The URL of the GraphQL endpoint.
   */
  | string
  | {
    /**
     * The URL of the GraphQL endpoint.
     */
    url: string
    /**
     * Override the way to get the schema.
     * By default, the schema is fetched from the endpoint.
     */
    schema?: SchemaConfig
  }
export type SchemaConfig =
  | {
    type: 'path'
    /**
     * The path to the schema file.
     */
    value: string
  }
  | {
    type: 'sdl' | 'json'
    /**
     * The content of the GraphQL schema (json) or SDL.
     */
    value: string
  }
  | {
    type: 'url'
    /**
     * The method to fetch the schema from the URL.
     */
    method?: 'GET' | 'POST'
    /**
     * The headers to send with the request.
     */
    headers?: Record<string, string>
    /**
     * Override the url to fetch the schema.
     */
    override?: string
  }
```
