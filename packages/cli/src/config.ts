import type { LoadConfigOptions } from 'c12'
import { loadConfig as read } from 'c12'
import { resolve } from 'pathe'
import { z } from 'zod'

const schemaConfig = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('path'),

    value: z.string(),

    export: z.string()
      .optional(),
  }),
  z.object({
    type: z.literal('sdl'),

    value: z.string(),
  }),
  z.object({
    type: z.literal('json'),

    value: z.string(),
  }),
  z.object({
    type: z.literal('url'),

    method: z.enum(['GET', 'POST'])
      .default('POST'),

    headers: z.record(z.string())
      .default({}),

    override: z.string()
      .optional(),
  }),
])

export type SchemaConfig =
  | {
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

const clientConfig = z.union([
  z.string(),
  z.object({
    url: z.string(),

    schema: schemaConfig
      .optional(),
  }),
])
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

const configSchema = z.object({
  clients: z.array(clientConfig)
    .default([]),

  output: z.string()
    .default('gqfn'),

  silent: z.boolean()
    .default(false),
})
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

const defaultConfigPath = 'gqfn.config.json'
const loadConfigOptions: LoadConfigOptions<Config> = {
  name: 'gqfn',
}

export async function loadConfig(): Promise<Config> {
  const { config } = await read<Config>({
    ...loadConfigOptions,
  })

  const state = configSchema.safeParse(config)
  if (!state.success) {
    throw new Error(
      'Failed to parse config: Invalid config.',
    )
  }

  return state.data
}

export async function initConfig(
  modify: Partial<Config> = {},
) {
  const { configFile } = await read<Config>({
    ...loadConfigOptions,
  })

  if (configFile && await exists(configFile)) {
    return false
  }

  await updateConfig(modify)
  return true
}

export async function updateConfig(
  modify: Partial<Config>,
): Promise<Config> {
  const { config, configFile } = await read<Config>({
    ...loadConfigOptions,
  })

  const state = configSchema.safeParse(config)
  if (!state.success) {
    throw new Error(
      'Failed to update config: Invalid config.',
    )
  }

  const fs = await import('node:fs/promises')

  if (
    configFile
    && await exists(configFile)
    && !configFile.endsWith('.json')
  ) {
    throw new Error(
      `Failed to save config to ${configFile}: You need to manually modify the configuration if you are using a non-JSON file.`,
    )
  }

  const newConfig: Config = {
    ...state.data,
    ...modify,
  }

  await fs.writeFile(
    resolve(
      configFile?.endsWith('.json')
        ? configFile
        : defaultConfigPath,
    ),
    JSON.stringify(newConfig, null, 2),
  )

  return newConfig
}

async function exists(filePath: string): Promise<boolean> {
  const fs = await import('node:fs/promises')
  try {
    await fs.access(filePath)
    return true
  }
  catch {
    return false
  }
}
