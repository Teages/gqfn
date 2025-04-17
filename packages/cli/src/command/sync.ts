import type { CommandContextOptions } from '../utils/ctx'
import { resolve } from 'pathe'
import { loadCliConfig } from '../config/loader'
import { sync as _sync } from '../sync'
import { createCommandContext } from '../utils/ctx'
import { generateFilenameFromUrl } from '../utils/hash'

export interface CommandSyncOptions extends CommandContextOptions {
  ignoreError: boolean
}

export async function sync(options: CommandSyncOptions) {
  const ctx = await createCommandContext(options)
  const { config } = await loadCliConfig(ctx)

  if (!config.clients?.length) {
    ctx.logger.warn('No clients found.')
    return
  }

  ctx.logger.start(`Syncing schema from ${config.clients.length} clients`)

  const fs = await import('node:fs/promises')
  const outputResolve = (...paths: string[]) => resolve(ctx.cwd, config.output, ...paths)

  const { result, errors = {} } = await _sync(config.clients)

  if (Object.keys(errors).length && !options.ignoreError) {
    throw new Error('Failed to sync schema from one or more clients.', { cause: errors })
  }

  const entries = Object.entries(result)
  const length = entries.length

  // Create output directory if it doesn't exist
  await fs.mkdir(outputResolve(), { recursive: true })

  for (const [url, content] of entries) {
    const filename = `${generateFilenameFromUrl(url)}.d.ts`
    const outputPath = outputResolve(filename)

    try {
      await fs.writeFile(outputPath, content)
    }
    catch (error) {
      if (!options.ignoreError) {
        throw new Error(`Failed to write schema file for ${url}`, { cause: error })
      }

      errors[url] = error as Error
    }
  }

  if (Object.keys(errors).length) {
    ctx.logger.warn(`Failed to sync schema from ${Object.keys(errors).length} ${Object.keys(errors).length > 1 ? 'clients' : 'client'}.`)
  }

  ctx.logger.success(`Synced schema from ${length} ${length > 1 ? 'clients' : 'client'}.`)
}
