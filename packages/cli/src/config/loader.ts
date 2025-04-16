import type { LoadConfigOptions } from 'c12'
import type { CommandContext } from '../utils/ctx'
import type { Config } from './type'
import { loadConfig } from 'c12'
import { updateConfig } from 'c12/update'

const loadConfigOptions = {
  name: 'gqfn',
  configFile: 'gqfn.config',
  rcFile: false,
} satisfies LoadConfigOptions<Config>

const defaultConfigFile = `
import { defineConfig } from '@gqfn/cli'

export default defineConfig({
  output: './gqfn',
})
`.trimStart()

export async function loadCliConfig(
  ctx: CommandContext,
): Promise<{ config: Config, configFile: string | undefined }> {
  const { config, configFile } = await loadConfig<Config>({
    ...loadConfigOptions,
    cwd: ctx.cwd,
    defaultConfig: () => ({
      output: './gqfn',
    }),
  })

  if (configFile?.endsWith('.json')) {
    ctx.logger.warn(
      'JSON config is deprecated, please use JS/TS config instead.',
    )
  }

  return { config, configFile }
}

export async function updateCliConfig(
  ctx: CommandContext,
  onUpdate?: (config: Config) => (Promise<void> | void),
) {
  const { configFile, created } = await updateConfig({
    ...loadConfigOptions,
    cwd: ctx.cwd,
    onCreate: () => {
      return defaultConfigFile
    },
    onUpdate,
  })

  return { configFile, created }
}
