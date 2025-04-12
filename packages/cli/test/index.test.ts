import type { SchemaConfig } from '../src'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'

import { describe, expect, it } from 'vitest'
import { sync } from '../src'

describe('@gqfn/core/cli', () => {
  const fixtures = [
    { name: 'cytoid-io', type: 'sdl', url: 'https://services.cytoid.io/graphql' },
    { name: 'cytoid-io', type: 'json', url: 'https://services.cytoid.io/graphql' },
    { name: 'star-wars', type: 'sdl', url: 'https://swapi-graphql.netlify.app/.netlify/functions/index' },
    { name: 'local', type: 'def', url: '/graphql' },
  ] as const

  fixtures.forEach(({ name, url, type }) => {
    it(`${name} ${type}`, async () => {
      const schemaConfig = await loadFixture(name, type)
      const output = await sync({
        clients: [{ url, schema: schemaConfig }],
        output: 'gqfn',
        silent: true,
      })
      expect(output.length).toBe(1)
      expect(output[0].content).toMatchSnapshot()
    })
  })

  it('empty', async () => {
    const output = await sync({ clients: [], output: 'gqfn', silent: true })
    expect(output.length).toBe(0)
  })

  it('duplicate', async () => {
    const { url, name } = fixtures[0]
    const schemaConfig = await loadFixture(name, 'sdl')
    const output = await sync({
      clients: [
        { url, schema: schemaConfig },
        { url, schema: schemaConfig },
      ],
      output: 'gqfn',
      silent: true,
    })
    expect(output.length).toBe(1)
  })

  it('failed', async () => {
    const { url, name } = fixtures[0]
    const schemaConfig = await loadFixture(name, 'sdl')
    const output = await sync({
      clients: [
        { url, schema: schemaConfig },
        { url: 'https://0.0.0.0:1234' },
      ],
      output: 'gqfn',
      silent: true,
    })
    expect(output.length).toBe(1)
  })
})

async function loadFixture(
  name: string,
  type: 'sdl' | 'json' | 'def',
): Promise<SchemaConfig> {
  const root = fileURLToPath(new URL('./fixtures', import.meta.url))

  if (type === 'sdl') {
    const path = resolve(root, name, 'schema.graphql')
    const file = await fs.readFile(path, 'utf-8')

    return { type: 'sdl', value: file }
  }

  if (type === 'json') {
    const path = resolve(root, name, 'schema.json')
    const file = await fs.readFile(path, 'utf-8')

    return { type: 'json', value: file }
  }

  if (type === 'def') {
    const path = resolve(root, name, 'schema.ts')
    return { type: 'path', value: path }
  }

  throw new Error('Unknown fixture type')
}
