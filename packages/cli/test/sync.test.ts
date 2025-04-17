import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'
import { describe, expect, it } from 'vitest'
import { loadSchema, sync } from '../src/sync'
import { loadSchemaFromJson, loadSchemaFromJsonFile, loadSchemaFromRemote, loadSchemaFromTs } from '../src/sync/loaders'

describe('sync', () => {
  const fixtures = fileURLToPath(new URL('./fixtures', import.meta.url))

  describe('sync', () => {
    it('should sync schema from multiple clients', async () => {
      const { result } = await sync([
        { url: 'https://services.cytoid.io/graphql', loader: { type: 'sdl', value: await fs.readFile(resolve(fixtures, 'cytoid-io/schema.graphql'), 'utf-8') } },
        { url: 'https://swapi-graphql.netlify.app/.netlify/functions/index', loader: { type: 'sdl', value: await fs.readFile(resolve(fixtures, 'star-wars/schema.graphql'), 'utf-8') } },
      ])
      expect(Object.keys(result)).toHaveLength(2)
      expect(result['https://services.cytoid.io/graphql']).toBeDefined()
      expect(result['https://swapi-graphql.netlify.app/.netlify/functions/index']).toBeDefined()
    })

    it('should handle duplicate clients', async () => {
      const { result, errors } = await sync([
        { url: 'https://example.com/graphql', loader: { type: 'sdl', value: 'type Query { hello: String }' } },
        { url: 'https://example.com/graphql', loader: { type: 'sdl', value: 'type Query { hello: String }' } },
      ])
      expect(Object.keys(result)).toHaveLength(1)
      expect(errors?.['https://example.com/graphql']).toBeDefined()
    })

    it('should handle sync errors', async () => {
      const { result, errors } = await sync([
        { url: 'https://example.com/graphql', loader: { type: 'sdl', value: 'type Query { hello: String }' } },
        { url: 'https://0.0.0.0:1234' },
      ])
      expect(Object.keys(result)).toHaveLength(1)
      expect(errors?.['https://0.0.0.0:1234']).toBeDefined()
    })
  })

  describe('loaders', () => {
    describe('loadSchemaFromTs', () => {
      it('should load schema from ts file', async () => {
        const schema = await loadSchemaFromTs(resolve(fixtures, 'local/schema.ts'), ['schema'])
        expect(schema).toBeDefined()
        expect(schema).toContain('type Query')
      })

      it('should throw error when schema not found', async () => {
        await expect(loadSchemaFromTs(resolve(fixtures, 'local/schema.ts'), ['not_found']))
          .rejects
          .toThrow('Schema not found')
      })
    })

    describe('loadSchemaFromJsonFile', () => {
      it('should load schema from json file', async () => {
        const schema = await loadSchemaFromJsonFile(resolve(fixtures, 'cytoid-io/schema.json'))
        expect(schema).toBeDefined()
        expect(schema).toContain('type Query')
      })

      it('should handle file read error', async () => {
        await expect(loadSchemaFromJsonFile(resolve(fixtures, 'not-exist.json')))
          .rejects
          .toThrow('Failed to read JSON form')
      })
    })

    describe('loadSchemaFromJson', () => {
      it('should load schema from json string', async () => {
        const json = await fs.readFile(resolve(fixtures, 'cytoid-io/schema.json'), 'utf-8')
        const schema = await loadSchemaFromJson(json)
        expect(schema).toBeDefined()
        expect(schema).toContain('type Query')
      })

      it('should handle json parse error', async () => {
        await expect(loadSchemaFromJson('invalid json'))
          .rejects
          .toThrow('Failed to parse JSON schema')
      })
    })

    describe('loadSchemaFromRemote', () => {
      it('should load schema from remote endpoint with GET', async () => {
        const schema = await loadSchemaFromRemote('https://graphql-test.teages.xyz/graphql-user', { method: 'GET' })
        expect(schema).toBeDefined()
        expect(schema).toContain('type Query')
      })

      it('should load schema from remote endpoint with POST', async () => {
        const schema = await loadSchemaFromRemote('https://graphql-test.teages.xyz/graphql-user', { method: 'POST' })
        expect(schema).toBeDefined()
        expect(schema).toContain('type Query')
      })

      it('should handle network error', async () => {
        await expect(loadSchemaFromRemote('https://0.0.0.0:1234', { method: 'GET' }))
          .rejects
          .toThrow()
      })
    })
  })

  describe('loadSchema', () => {
    it('should load schema from function loader', async () => {
      const schema = await loadSchema('', () => 'type Query { hello: String }')
      expect(schema).toBe('type Query { hello: String }')
    })

    it('should load schema from url loader', async () => {
      const schema = await loadSchema('https://graphql-test.teages.xyz/graphql-user')
      expect(schema).toBeDefined()
      expect(schema).toContain('type Query')
    })

    it('should load schema from path loader', async () => {
      const schema = await loadSchema('', { type: 'path', value: resolve(fixtures, 'cytoid-io/schema.graphql') })
      expect(schema).toBeDefined()
      expect(schema).toContain('type Query')
    })

    it('should load schema from json loader', async () => {
      const json = await fs.readFile(resolve(fixtures, 'cytoid-io/schema.json'), 'utf-8')
      const schema = await loadSchema('', { type: 'json', value: json })
      expect(schema).toBeDefined()
      expect(schema).toContain('type Query')
    })

    it('should load schema from sdl loader', async () => {
      const sdl = await fs.readFile(resolve(fixtures, 'cytoid-io/schema.graphql'), 'utf-8')
      const schema = await loadSchema('', { type: 'sdl', value: sdl })
      expect(schema).toBe(sdl)
    })
  })
})
