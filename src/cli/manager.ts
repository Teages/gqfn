import { resolve } from 'pathe'
import { loadConfig, updateConfig } from './config'
import { useLogger } from './logger'
import { sync } from './sync'

export async function addClient(url: string) {
  const config = await loadConfig()
  const logger = useLogger(config)

  logger.log(`Adding client: ${url}`)

  const clientsSet = new Set(config.clients)
  clientsSet.add(url)

  updateConfig({
    clients: Array.from(clientsSet),
  })
  return await syncClient()
}

export async function removeClient(url: string) {
  const config = await loadConfig()
  const logger = useLogger(config)

  logger.log(`Removing client: ${url}`)

  updateConfig({
    clients: config.clients.filter(client => client !== url),
  })
  return await syncClient()
}

export async function syncClient() {
  const config = await loadConfig()
  const logger = useLogger(config)

  logger.start('Syncing clients schema')

  const { clients, output } = config
  if (clients.length === 0) {
    logger.warn('No clients found.')
    return
  }

  const fs = await import('node:fs/promises')
  const outputResolve = (...paths: string[]) => resolve(output, ...paths)

  const files = await sync(config)

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

  logger.success(`Synced schema from ${clients.length} ${clients.length > 1 ? 'clients' : 'client'}`)
}
