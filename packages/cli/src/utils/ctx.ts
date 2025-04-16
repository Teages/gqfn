import type { ConsolaInstance } from 'consola'
import { useLogger } from '../utils/logger'

export interface CommandContext {
  logger: ConsolaInstance
  cwd: string
}

export interface CommandContextOptions {
  silent: boolean
}

export async function createCommandContext(options: CommandContextOptions): Promise<CommandContext> {
  const { silent } = options
  const logger = useLogger({ silent })
  const cwd = await import('node:process').then(x => x.cwd())

  return {
    logger,
    cwd,
  }
}
