import type { SchemaLoader } from '../src'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'

import { describe, expect, it } from 'vitest'
import { sync } from '../src'

describe('@gqfn/cli', () => {
  const fixtures = [
    { name: 'cytoid-io', type: 'sdl', url: 'https://services.cytoid.io/graphql' },
    { name: 'cytoid-io', type: 'json', url: 'https://services.cytoid.io/graphql' },
    { name: 'star-wars', type: 'sdl', url: 'https://swapi-graphql.netlify.app/.netlify/functions/index' },
    { name: 'local', type: 'def', url: '/graphql' },
  ] as const

  fixtures.forEach(({ name, url, type }) => {
    it(`${name} ${type}`, async () => {
      const schemaConfig = await loadFixture(name, type)
      const { result } = await sync([{ url, loader: schemaConfig }])
      expect(Object.keys(result)).toHaveLength(1)
      expect(result[url]).toMatchSnapshot()
    })
  })

  it('empty', async () => {
    const { result } = await sync([])
    expect(Object.keys(result)).toHaveLength(0)
  })

  it('duplicate', async () => {
    const { url, name } = fixtures[0]
    const schemaConfig = await loadFixture(name, 'sdl')
    const { result, errors } = await sync([
      { url, loader: schemaConfig },
      { url, loader: schemaConfig },
    ])
    expect(Object.keys(result)).toHaveLength(1)
    expect(errors?.[url]).toBeDefined()
  })

  it('failed', async () => {
    const { url, name } = fixtures[0]
    const schemaConfig = await loadFixture(name, 'sdl')
    const { result, errors } = await sync([
      { url, loader: schemaConfig },
      { url: 'https://0.0.0.0:1234' },
    ])
    expect(Object.keys(result)).toHaveLength(1)
    expect(errors?.['https://0.0.0.0:1234']).toBeDefined()
  })
})

async function loadFixture(
  name: string,
  type: 'sdl' | 'json' | 'def',
): Promise<SchemaLoader> {
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
