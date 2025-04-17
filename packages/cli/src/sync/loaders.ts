import type { IntrospectionQuery } from 'graphql'
import type { FetchOptions } from 'ofetch'
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema, printSchema } from 'graphql'
import { ofetch } from 'ofetch'

export async function loadSchemaFromTs(path: string, search: string[]): Promise<string> {
  const module = await import('importx')
    .then(x => x.import(path, import.meta.url))

  for (const name of search) {
    if (name in module && module[name]) {
      const schema = module[name]
      if (typeof schema === 'string') {
        return schema
      }
      if (schema instanceof GraphQLSchema) {
        return printSchema(schema)
      }
    }
  }

  throw new Error(`Schema not found in ${path} with tried: ${search.join(', ')}`)
}

export async function loadSchemaFromJsonFile(path: string) {
  try {
    const fs = await import('node:fs/promises')
    return loadSchemaFromJson(await fs.readFile(path, 'utf-8'))
  }
  catch (cause) {
    throw new Error(`Failed to read JSON form ${path}`, { cause })
  }
}

export async function loadSchemaFromJson(raw: string) {
  try {
    return printSchema(buildClientSchema(JSON.parse(raw)))
  }
  catch (cause) {
    throw new Error(`Failed to parse JSON schema`, { cause })
  }
}

export async function loadSchemaFromRemote(
  endpoint: string,
  ofetchOptions: FetchOptions<'json'> & { method?: 'GET' | 'POST' },
) {
  const options = ofetchOptions.method === 'GET'
    ? {
        ...ofetchOptions,
        method: 'GET',
        query: { query: getIntrospectionQuery() },
      }
    : {
        ...ofetchOptions,
        method: 'POST',
        body: { query: getIntrospectionQuery() },
      }

  const { data } = await ofetch<{ data: IntrospectionQuery }>(endpoint, options)

  return printSchema(buildClientSchema(data))
}
