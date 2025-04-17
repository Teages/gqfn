import type { ConsolaInstance } from 'consola'
import { useLogger } from '../utils/logger'

export interface CommandContext {
  logger: ConsolaInstance
  cwd: string
}

export interface CommandContextOptions {
  silent: boolean
  cwd?: string
}

export async function createCommandContext(options: CommandContextOptions): Promise<CommandContext> {
  const { silent, cwd: _cwd } = options
  const logger = useLogger({ silent })
  const cwd: string = _cwd ?? await import('node:process').then(x => x.cwd())

  return {
    logger,
    cwd,
  }
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('ctx', async () => {
    const { cwd } = await import('node:process')

    it('should create command context with silent mode', async () => {
      const ctx = await createCommandContext({ silent: true })
      expect(ctx).toHaveProperty('logger')
      expect(ctx).toHaveProperty('cwd')
      expect(ctx.logger.level).toBe(0)
      expect(ctx.cwd).toBe(cwd())
    })

    it('should create command context without silent mode', async () => {
      const ctx = await createCommandContext({ silent: false })
      expect(ctx).toHaveProperty('logger')
      expect(ctx).toHaveProperty('cwd')
      expect(ctx.logger.level).not.toBe(0)
      expect(ctx.cwd).toBe(cwd())
    })
  })
}
