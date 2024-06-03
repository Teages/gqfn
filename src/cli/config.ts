import { read, update, write } from 'rc9'
import { z } from 'zod'

const configSchema = z.object({
  clients: z.array(z.string())
    .default([]),

  output: z.string()
    .default('.gqf'),
})
export type Config = z.output<typeof configSchema>

const defaultConfigPath = 'gqf.conf'

export function loadConfig(path: string = defaultConfigPath): Config {
  const rcConfig = read<Config>({
    name: path,
    flat: false,
  })

  const state = configSchema.safeParse(rcConfig)
  if (!state.success) {
    throw state.error
  }

  return state.data
}

export function saveConfig(config: Config, path: string = defaultConfigPath): void {
  const state = configSchema.safeParse(config)
  if (!state.success) {
    throw state.error
  }

  write(config, {
    name: path,
    flat: false,
  })
}

export function updateConfig(config: Partial<Config>, path: string = defaultConfigPath): void {
  const state = configSchema.partial().safeParse(config)
  if (!state.success) {
    console.error('Invalid config:', state.error.issues)
    return
  }

  update(config, {
    name: path,
    flat: false,
  })
}
