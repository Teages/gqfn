import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { resolve } from 'pathe'

import { sync } from '../../src/cli'

describe('@teages/gqf/cli', () => {
  const fixtures = [
    { name: 'cytoid-io', url: 'https://services.cytoid.io/graphql' },
    { name: 'star-wars', url: 'https://swapi-graphql.netlify.app/.netlify/functions/index' },
  ] as const

  fixtures.forEach(({ name, url }) => {
    it(name, async () => {
      const file = await loadFixture(name)
      const output = await sync({
        clients: [{ url, schema: { type: 'sdl', value: file } }],
        output: 'gqf',
        silent: true,
      })
      expect(output.length).toBe(1)
      expect(output[0].content).toMatchSnapshot()
    })
  })

  it('empty', async () => {
    const output = await sync({ clients: [], output: 'gqf', silent: true })
    expect(output.length).toBe(0)
  })

  it('duplicate', async () => {
    const { url, name } = fixtures[0]
    const file = await loadFixture(name)
    const output = await sync({
      clients: [
        { url, schema: { type: 'sdl', value: file } },
        { url, schema: { type: 'sdl', value: file } },
      ],
      output: 'gqf',
      silent: true,
    })
    expect(output.length).toBe(1)
  })

  it('failed', async () => {
    const { url, name } = fixtures[0]
    const file = await loadFixture(name)
    const output = await sync({
      clients: [
        { url, schema: { type: 'sdl', value: file } },
        { url: 'https://0.0.0.0:1234' },
      ],
      output: 'gqf',
      silent: true,
    })
    expect(output.length).toBe(1)
  })
})

async function loadFixture(name: string) {
  const root = fileURLToPath(new URL('./fixtures', import.meta.url))

  const path = resolve(root, name, 'schema.graphql')
  const file = await fs.readFile(path, 'utf-8')

  return file
}
