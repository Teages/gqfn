import type { Config } from '../config'
import consola from 'consola'

export const logger = consola.withTag('@gqfn/cli')
export function useLogger(config: Pick<Config, 'silent'>) {
  return config.silent
    ? logger.create({ level: 0 })
    : logger
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('logger', () => {
    it('should create silent logger', () => {
      const logger = useLogger({ silent: true })
      expect(logger.level).toBe(0)
    })

    it('should create normal logger', () => {
      const logger = useLogger({ silent: false })
      expect(logger.level).not.toBe(0)
    })
  })
}
