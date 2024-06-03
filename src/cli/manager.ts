import { ofetch } from 'ofetch'
import { resolve } from 'pathe'
import { murmurHash } from 'ohash'
import type { IntrospectionQuery } from 'graphql'
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql'
import { generate } from '../schema/codegen'
import { loadConfig, updateConfig } from './config'

export async function addClient(url: string) {
  const config = loadConfig()

  const clientsSet = new Set(config.clients)
  clientsSet.add(url)

  updateConfig({
    clients: Array.from(clientsSet),
  })
  return await sync()
}

export async function removeClient(url: string) {
  const config = loadConfig()
  updateConfig({
    clients: config.clients.filter(client => client !== url),
  })
  return await sync()
}

export async function sync() {
  const { clients, output } = loadConfig()
  const fs = await import('node:fs/promises')
  const outputResolve = (...paths: string[]) => resolve(output, ...paths)

  const result = new Map<string, string>()
  Promise.all(clients.map(async (url) => {
    // load graphql schema sdl
    const { data } = await ofetch<{ data: IntrospectionQuery }>(url, {
      method: 'POST',
      body: { query: getIntrospectionQuery() },
    })
    const sdl = printSchema(buildClientSchema(data))

    // generate code
    const code = generate(sdl)

    result.set(url, code)
  }))

  // make sure output directory exists
  await fs.mkdir(outputResolve(), { recursive: true })
  console.log(`Output directory: ${outputResolve()}`)

  // write code to files
  Promise.all([...result.entries()].map(async ([url, code]) => {
    const filename = `${murmurHash(url).toString(32)}.ts`
    console.log(`Writing code to ${filename}`)
    await fs.writeFile(outputResolve(filename), code, 'utf-8')
  }))
}
