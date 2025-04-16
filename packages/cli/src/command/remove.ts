import type { CommandContextOptions } from '../utils/ctx'
import { loadCliConfig, updateCliConfig } from '../config/loader'
import { createCommandContext } from '../utils/ctx'

export interface CommandRemoveOptions extends CommandContextOptions {
  urls: string[]
}

export async function remove({ urls, ...options }: CommandRemoveOptions) {
  const ctx = await createCommandContext(options)

  // check is there is already a config file
  const { config, configFile } = await loadCliConfig(ctx)
  if (!configFile) {
    ctx.logger.error('No configuration file found. Please run `gqfn init` first.')
    return
  }

  // check if already have clients
  if (!config.clients?.length) {
    ctx.logger.warn('No clients found.')
    return
  }

  // remove clients
  const res = await updateCliConfig(ctx, (config) => {
    config.clients = config.clients?.filter((client) => {
      if (typeof client === 'string') {
        return !urls.includes(client)
      }

      return !urls.includes(client.url)
    })
  })

  return res
}
