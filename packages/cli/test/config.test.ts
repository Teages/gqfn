import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import consola from 'consola'
import { resolve } from 'pathe'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { loadCliConfig, updateCliConfig } from '../src/config/loader'

describe('config', () => {
  const tmpDir = fileURLToPath(new URL('../node_modules/.tmp', import.meta.url))
  const logger = consola.withTag('test')

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

  describe('loader', () => {
    it('should load default config', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      await fs.writeFile(configPath, 'export default { output: "./test" }')
      const { config, configFile } = await loadCliConfig({ logger, cwd: tmpDir })
      expect(configFile).toBe(configPath)
      expect(config.output).toBe('./test')
    })

    it('should warn when using json config', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.json')
      await fs.writeFile(configPath, JSON.stringify({ output: './test' }))
      const { config, configFile } = await loadCliConfig({ logger, cwd: tmpDir })
      expect(configFile).toBe(configPath)
      expect(config.output).toBe('./test')
    })

    it('should update config', async () => {
      const configPath = resolve(tmpDir, 'gqfn.config.ts')
      const { configFile, created } = await updateCliConfig(
        { logger, cwd: tmpDir },
        (config) => {
          config.output = './test'
        },
      )
      expect(configFile).toBe(configPath)
      expect(created).toBe(true)
    })
  })
})
