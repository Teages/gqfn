import type { CommandContextOptions } from '../utils/ctx'
import { updateCliConfig } from '../config/loader'
import { createCommandContext } from '../utils/ctx'

export interface CommandInitOptions extends CommandContextOptions {
}

export async function init(options: CommandInitOptions) {
  const ctx = await createCommandContext(options)
  const res = await updateCliConfig(ctx)

  if (res.created) {
    ctx.logger.success(`Successfully created gqfn configuration in ${res.configFile}.`)
  }
  else {
    ctx.logger.warn('Configuration file already exists. Nothing to do.')
  }

  return res
}
