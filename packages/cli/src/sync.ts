import type { DocumentNode } from 'graphql'
import type { ClientConfig, Config, SchemaConfig } from './config'

import { extname, resolve } from 'pathe'
import { generate } from './codegen'
import { useLogger } from './logger'
import { loadSchemaFromJson, loadSchemaFromJsonFile, loadSchemaFromRemote, loadSchemaFromTs } from './utils/schema'
import { generateFilenameFromUrl } from './utils/hash'

export interface Output {
  filename: string
  url: string
  content: string
}

export async function sync(config: Config): Promise<Output[]> {
  const logger = useLogger(config)
  const { clients } = config

  if (clients.length === 0) {
    logger.warn('No clients found.')
  }

  const result = new Map<string, string>()
  await Promise.all(clients.map(async (clientConfig) => {
    const { url, schema } = resolveClient(clientConfig)

    if (result.has(url)) {
      logger.warn(`Client ${url} duplicate, skipping.`)
      return
    }

    // load graphql schema sdl
    try {
      const sdl = await resolveSchemaOverride(url, schema)
      const code = generate(sdl, { url })
      result.set(url, code)
    }
    catch (error) {
      if (error instanceof Error) {
        logger.error(`Failed to load schema from ${url}:\n  ${error.message}`)
      }
      else {
        logger.error(`Failed to load schema from ${url}: Unknown error.`)
      }
    }
  }))

  // write to output file
  return [...result.entries()].map(([url, content]) => {
    const filename = `${generateFilenameFromUrl(url)}.d.ts`
    return {
      filename,
      url,
      content,
    }
  })
}

function resolveClient(
  client: ClientConfig,
): Exclude<ClientConfig, string> {
  return typeof client === 'string'
    ? { url: client }
    : client
}

async function resolveSchemaOverride(
  url: string,
  opts?: SchemaConfig,
): Promise<string | DocumentNode> {
  if (!opts || opts.type === 'url') {
    const { method, headers } = opts ?? {}
    return await loadSchemaFromRemote(opts?.override ?? url, { method, headers })
  }

  if (opts.type === 'path') {
    const path = resolve(opts.value)
    const ext = extname(path)

    if (ext === '.graphql' || ext === '.gql') {
      try {
        const fs = await import('node:fs/promises')
        return await fs.readFile(path, 'utf-8')
      }
      catch (e) {
        throw new Error(`Failed to read SDL form ${path}: ${e}`)
      }
    }

    if (ext === '.json') {
      return loadSchemaFromJsonFile(path)
    }

    if (ext === '.ts' || ext === '.js') {
      return await loadSchemaFromTs(path, opts.export ? [opts.export] : ['schema', 'default'])
    }

    throw new Error(`Unknown schema file type ${ext}: ${path}`)
  }

  if (opts.type === 'json') {
    return loadSchemaFromJson(opts.value)
  }

  return opts.value
}
