import consola from 'consola'
import type { Config } from './config'

export const logger = consola.withTag('@teages/gqf/cli')
export function useLogger(config: Config) {
  return config.silent
    ? logger.create({ level: 999 })
    : logger
}
