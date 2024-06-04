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
      .optional()
      .default({}),

    schemaOverride: z.string()
      .optional(),
  }),
])

const configSchema = z.object({
  clients: z.array(clientConfigSchema)
    .default([]),

  output: z.string()
    .default('.gqf'),

  silent: z.boolean()
    .default(false),
})
export type Config = z.output<typeof configSchema>

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

export async function updateConfig(modify: Partial<Config>): Promise<void> {
  const { config, configFile } = await read<Config>({
    ...loadConfigOptions,
  })

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

  await fs.writeFile(resolve(defaultConfigPath), JSON.stringify({
    ...modify,
    ...config,
  }, null, 2))
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
