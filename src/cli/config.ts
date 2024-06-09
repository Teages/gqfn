import { loadConfig as read } from 'c12'
import type { LoadConfigOptions } from 'c12'
import { z } from 'zod'
import { resolve } from 'pathe'

const clientConfigSchema = z.union([
  z.string(),
  z.object({
    url: z.string(),

    method: z.enum(['GET', 'POST'])
      .default('POST'),

    headers: z.record(z.string())
      .default({}),

    schemaOverride: z.string()
      .optional(),
  }),
])
export type ClientConfig =
  | string
  | {
    url: string
    method?: 'GET' | 'POST'
    headers?: Record<string, string>
    schemaOverride?: string
  }

const configSchema = z.object({
  clients: z.array(clientConfigSchema)
    .default([]),

  output: z.string()
    .default('gqf'),

  silent: z.boolean()
    .default(false),
})
export interface Config {
  clients: ClientConfig[]
  output: string
  silent: boolean
}

const defaultConfigPath = 'gqf.config.json'
const loadConfigOptions: LoadConfigOptions<Config> = {
  name: 'gqf',
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
