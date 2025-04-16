import type { Config } from '../config'
import consola from 'consola'

export const logger = consola.withTag('@gqfn/cli')
export function useLogger(config: Pick<Config, 'silent'>) {
  return config.silent
    ? logger.create({ level: 0 })
    : logger
}
