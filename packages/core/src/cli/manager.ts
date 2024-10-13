import type { Config } from './config'
import { resolve } from 'pathe'
import { initConfig, loadConfig, updateConfig } from './config'
import { useLogger } from './logger'
import { sync } from './sync'

export async function init(modify: Partial<Config>, silent: boolean) {
  const logger = useLogger({ silent })
  const notExist = await initConfig(modify)

  if (notExist) {
    logger.success('Initialized configuration for @gqfn/core.')
  }
  else {
    logger.warn('Configuration file already exists. Nothing to do.')
  }
}

export async function addClient(
  urls: Array<string>,
  configOverride?: Partial<Config>,
) {
  const config = {
    ...await loadConfig(),
    ...configOverride,
  }
  const logger = useLogger(config)

  logger.log(`Add client: ${urls.join(', ')}`)

  const clientsSet = new Set(config.clients)
  urls.forEach(url => clientsSet.add(url))

  const newConfig = await updateConfig({
    clients: Array.from(clientsSet),
  })
  return await syncClient(newConfig)
}

export async function removeClient(
  urls: Array<string>,
  configOverride?: Partial<Config>,
) {
  const config = {
    ...await loadConfig(),
    ...configOverride,
  }
  const logger = useLogger(config)

  logger.log(`Removing client: ${urls.join(', ')}`)

  const newConfig = await updateConfig({
    clients: config.clients.filter(client =>
      !urls.includes(typeof client === 'string' ? client : client.url),
    ),
  })
  return await syncClient(newConfig)
}

export async function syncClient(
  configOverride?: Partial<Config>,
) {
  const config = {
    ...await loadConfig(),
    ...configOverride,
  }
  const logger = useLogger(config)

  const { clients, output } = config
  if (clients.length === 0) {
    logger.warn('No clients found.')
    return
  }
  else {
    logger.start(`Syncing schema from ${clients.length} clients`)
  }

  const fs = await import('node:fs/promises')
  const outputResolve = (...paths: string[]) => resolve(output, ...paths)

  const files = await sync(config)

  try {
    logger.start(`Schema will be written in: ${outputResolve()}`)

    // create the output directory
    await fs.mkdir(outputResolve(), { recursive: true })
  }
  catch (error) {
    if (error instanceof Error) {
      logger.error(`Failed to create output directory:\n  ${error.message}`)
      throw error
    }
    else {
      logger.error('Failed to create output directory: Unknown error.')
      throw error
    }
  }

  // write code to files
  await Promise.all(files.map(async ({ filename, content }) => {
    try {
      await fs.writeFile(outputResolve(filename), content, 'utf-8')
    }
    catch (error) {
      if (error instanceof Error) {
        logger.error(`Failed to write code to ${filename}:\n  ${error.message}`)
      }
      else {
        logger.error(`Failed to write code to ${filename}: Unknown error.`)
      }
    }
  }))

  const success = files.length
  const failure = files.length - success

  if (success > 0) {
    logger.success(`Synced schema from ${success} ${success > 1 ? 'clients' : 'client'}`)
  }
  if (failure > 0) {
    logger.error(`Failed to sync schema from ${failure} ${failure > 1 ? 'clients' : 'client'}`)
  }
}
