import type { DocumentNode, IntrospectionQuery } from 'graphql'
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql'
import { ofetch } from 'ofetch'
import { murmurHash } from 'ohash'
import { resolve } from 'pathe'
import { generate } from '../schema/codegen'
import type { ClientConfig, Config, SchemaConfig } from './config'
import { useLogger } from './logger'

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

    // load graphql schema sdl from remote
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
    const filename = `${murmurHash(url).toString(32)}.d.ts`
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
    const { method, headers } = opts ?? { }
    const override = opts?.override
    const { data } = await ofetch<{ data: IntrospectionQuery }>(
      override ?? url,
      {
        method: method ?? 'POST',
        headers,
        body: { query: getIntrospectionQuery() },
      },
    )
    return printSchema(buildClientSchema(data))
  }

  if (opts.type === 'path') {
    const path = resolve(opts.value)
    try {
      const fs = await import('node:fs/promises')
      return await fs.readFile(path, 'utf-8')
    }
    catch (e) {
      throw new Error(`Failed to read ${path}: ${e}`)
    }
  }
  if (opts.type === 'json') {
    return JSON.parse(opts.value)
  }

  return opts.value
}
