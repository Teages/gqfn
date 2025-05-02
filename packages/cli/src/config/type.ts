import type { FetchOptions } from 'ofetch'

export interface FileLoader {
  type: 'path'
  /**
   * The path to the schema file. Could be json, SDL or js/ts file.
   * If you are using a js/ts file, make sure to export the schema in default or named `schema`.
   *
   * Prefer export the schema string instead of the GraphQLSchema object if using js/ts file.
   */
  value: string
  /**
   * The name of the exported schema if using js/ts file.
   */
  export?: string
}

export interface SDLLoader {
  type: 'sdl' | 'json'
  /**
   * The content of the GraphQL schema (json) or SDL.
   */
  value: string
}

export interface FetchLoader {
  type: 'url'
  /**
   * The method to fetch the schema from the URL.
   */
  method?: 'GET' | 'POST'
  /**
   * Override the way to get the schema.
   * By default, the schema is fetched from the endpoint.
   */
  override?: string
  /**
   * Fetch options to use when fetching the schema.
   *
   * We use [ofetch](https://github.com/unjs/ofetch) to fetch the schema,
   * you can bypass the fetch options with your custom fetch.
   */
  fetchOptions?: Omit<FetchOptions<'json'>, 'method' | 'body'>
}

export type GetterLoader = () => (Promise<string> | string)

export type SchemaLoader = FileLoader | SDLLoader | FetchLoader | GetterLoader

export interface ScalarConfig {
  /**
   * The input type of the scalar.
   * @default 'unknown'
   */
  input: string
  /**
   * The output type of the scalar.
   * @default 'unknown'
   */
  output: string
}

export interface ClientConfig {
  /**
   * The URL of the GraphQL endpoint.
   */
  url: string
  /**
   * Override the way to get the schema.
   * By default, the schema is fetched from the endpoint.
   */
  loader?: SchemaLoader
  /**
   * The config of the scalars.
   *
   * The key is the name of the scalar,
   * the value is the config of the scalar.
   *
   * - If the value is `string`, it will be used as both the input and output type of the scalar.
   * - If the value is {@link ScalarConfig}, it will be used as the config of the scalar.
   */
  scalars?: Record<string, ScalarConfig | string>
}

export interface Config {
  /**
   * The list of clients to generate types for.
   */
  clients?: (ClientConfig | string)[]

  /**
   * Output directory for generated code.
   */
  output: string

  /**
   * Disable console output.
   */
  silent?: boolean
}
