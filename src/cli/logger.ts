import consola from 'consola'
import type { Config } from './config'

export const logger = consola.withTag('@teages/gqf/cli')
export function useLogger(config: Pick<Config, 'silent'>) {
  return config.silent
    ? logger.create({ level: 0 })
    : logger
}
