import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { add } from '../src/command/add'
import { init } from '../src/command/init'
import { sync } from '../src/command/sync'

describe('command', () => {
  const tmpDir = fileURLToPath(new URL('../node_modules/.tmp', import.meta.url))
  const fixtures = fileURLToPath(new URL('./fixtures', import.meta.url))

  beforeEach(async () => {
    try {
      await fs.rm(tmpDir, { recursive: true })
    }
    catch { /** ignore */ }

    await fs.mkdir(tmpDir, { recursive: true })
  })

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true })
  })

  describe('init', () => {
    it('should create config file', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      const res = await init({ silent: true, cwd: tmpDir })
      expect(res.created).toBe(true)
      expect(res.configFile).toBe(configPath)
    })

    it('should not create config file if exists', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, 'export default {}')
      const res = await init({ silent: true, cwd: tmpDir })
      expect(res.created).toBe(false)
      expect(res.configFile).toBe(configPath)
    })
  })

  describe('add', () => {
    it('should add new clients', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, 'export default { clients: [] }')
      const res = await add({ silent: true, cwd: tmpDir, clients: ['https://example.com/graphql'] })
      expect(res.created).toBe(false)
      expect(res.configFile).toBe(configPath)
    })

    it('should not add existing clients', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, 'export default { clients: ["https://example.com/graphql"] }')
      const res = await add({ silent: true, cwd: tmpDir, clients: ['https://example.com/graphql'] })
      expect(res.created).toBe(false)
      expect(res.configFile).toBe(configPath)
    })
  })

  describe('sync', () => {
    it('should sync schema from clients', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, `
        export default {
          clients: [
            {
              url: 'https://services.cytoid.io/graphql',
              loader: {
                type: 'sdl',
                value: \`${await fs.readFile(resolve(fixtures, 'cytoid-io/schema.graphql'), 'utf-8')}\`
              }
            }
          ],
          output: './gqfn'
        }
      `)
      await sync({ silent: true, cwd: tmpDir, ignoreError: false })
      const outputPath = resolve(tmpDir, 'gqfn/services.cytoid.io_eatlg4.d.ts')
      expect(await fs.access(outputPath).then(() => true).catch(() => false)).toBe(true)
    })

    it('should handle sync errors', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, `
        export default {
          clients: [
            { url: 'https://0.0.0.0:1234' }
          ],
          output: './gqfn'
        }
      `)
      await expect(sync({ silent: true, cwd: tmpDir, ignoreError: false }))
        .rejects
        .toThrow('Failed to sync schema from one or more clients')
    })

    it('should ignore sync errors when ignoreError is true', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, `
        export default {
          clients: [
            { url: 'https://0.0.0.0:1234' }
          ],
          output: './gqfn'
        }
      `)
      await sync({ silent: true, cwd: tmpDir, ignoreError: true })
    })
  })
})
