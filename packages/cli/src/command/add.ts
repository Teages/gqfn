import type { ClientConfig } from '../config'
import type { CommandContextOptions } from '../utils/ctx'
import { loadCliConfig, updateCliConfig } from '../config/loader'
import { createCommandContext } from '../utils/ctx'

export interface CommandAddOptions extends CommandContextOptions {
  clients: (ClientConfig | string)[]
}

export async function add({ clients, ...options }: CommandAddOptions) {
  const ctx = await createCommandContext(options)

  const { config } = await loadCliConfig(ctx)
  const existingClients = new Set(config.clients?.map?.(c => typeof c === 'string' ? c : c.url))
  const notExists = clients.filter(c => typeof c === 'string' ? !existingClients.has(c) : !existingClients.has(c.url))

  const res = await updateCliConfig(ctx, (config) => {
    if (!notExists.length) {
      ctx.logger.warn('All clients provided are already exist.')
      return
    }

    config.clients ??= []
    config.clients = [...config.clients, ...notExists]
  })

  if (res.created) {
    ctx.logger.success(`Successfully created gqfn configuration in ${res.configFile}.`)
  }

  ctx.logger.success(`Successfully added ${notExists.length} ${notExists.length > 1 ? 'clients' : 'client'} to ${res.configFile}.`)

  return res
}
