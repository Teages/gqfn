import type { IntrospectionQuery } from 'graphql'
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql'
import { ofetch } from 'ofetch'
import { murmurHash } from 'ohash'
import { resolve } from 'pathe'
import { generate } from '../schema/codegen'
import type { Config } from './config'
import { useLogger } from './logger'

export interface Output {
  filename: string
  url: string
  content: string
}

export async function sync(config: Config): Promise<Output[]> {
  const logger = useLogger(config)
  const { clients } = config

  logger.start('Syncing clients schema')

  if (clients.length === 0) {
    logger.warn('No clients found.')
  }

  const result = new Map<string, string>()
  await Promise.all(clients.map(async (opt) => {
    const {
      url,
      method,
      headers,
      schemaOverride,
    } = typeof opt === 'string'
      ? {
          url: opt,
          method: 'POST' as const,
          headers: {},
          schemaOverride: undefined,
        }
      : opt

    if (schemaOverride) {
      const fs = await import('node:fs/promises')
      const sdl = await fs.readFile(resolve(schemaOverride), 'utf-8')
      const code = generate(sdl, { url })
      result.set(url, code)
      return
    }

    // load graphql schema sdl from remote
    try {
      const { data } = await ofetch<{ data: IntrospectionQuery }>(url, {
        method,
        headers,
        body: { query: getIntrospectionQuery() },
      })
      const sdl = printSchema(buildClientSchema(data))
      // generate code
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
    const filename = `${murmurHash(url).toString(32)}.ts`
    return {
      filename,
      url,
      content,
    }
  })
}
