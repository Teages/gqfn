import type { DocumentNode } from 'graphql'

import type { ClientConfig, SchemaLoader } from '../config'
import { extname, resolve } from 'pathe'
import { generate } from '../codegen'
import { loadSchemaFromJson, loadSchemaFromJsonFile, loadSchemaFromRemote, loadSchemaFromTs } from './loaders'

export interface SyncResult {
  result: Record<string, string>
  errors?: Record<string, Error>
}

export async function sync(clients: (ClientConfig | string)[]): Promise<SyncResult> {
  if (!clients?.length) {
    return { result: {} }
  }

  const result = new Map<string, string>()
  const urls = new Set<string>()
  const errors: Record<string, Error> = {}

  await Promise.allSettled(clients.map(async (clientConfig) => {
    const { url, loader, scalars } = resolveClient(clientConfig)

    if (urls.has(url)) {
      errors[url] = new Error(`Duplicate client: ${url}`)
      return
    }
    urls.add(url)

    // load graphql schema sdl
    try {
      const sdl = await loadSchema(url, loader)
      const code = generate(sdl, { url, scalars })
      result.set(url, code)
    }
    catch (error) {
      if (error instanceof Error) {
        errors[url] = error
      }
      else {
        errors[url] = new Error(`Failed to load schema from ${url}: Unknown error.`)
      }
    }
  }))

  return { result: Object.fromEntries(result), errors: Object.keys(errors).length ? errors : undefined }
}

function resolveClient(
  client: ClientConfig | string,
): ClientConfig {
  return typeof client === 'string'
    ? { url: client }
    : client
}

export async function loadSchema(
  url: string,
  loader?: SchemaLoader,
): Promise<string | DocumentNode> {
  if (loader && typeof loader === 'function') {
    return await loader()
  }

  if (!loader || loader.type === 'url') {
    const { method, fetchOptions, override } = loader ?? {}
    return await loadSchemaFromRemote(override ?? url, { ...fetchOptions, method })
  }

  if (loader.type === 'path') {
    const path = resolve(loader.value)
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
      return await loadSchemaFromTs(path, loader.export ? [loader.export] : ['schema', 'default'])
    }

    throw new Error(`Unknown schema file type ${ext}: ${path}`)
  }

  if (loader.type === 'json') {
    return loadSchemaFromJson(loader.value)
  }

  return loader.value
}
