export async function exists(filePath: string): Promise<boolean> {
  const fs = await import('node:fs/promises')
  try {
    await fs.access(filePath)
    return true
  }
  catch {
    return false
  }
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('fs', async () => {
    const { fileURLToPath } = await import('node:url')
    const { resolve } = await import('pathe')
    const fs = await import('node:fs/promises')

    const tmpDir = fileURLToPath(new URL('../../node_modules/.tmp/fs', import.meta.url))

    it('should return true for existing file', async () => {
      const filePath = resolve(tmpDir, 'test.txt')
      await fs.mkdir(tmpDir, { recursive: true })
      await fs.writeFile(filePath, 'test')
      expect(await exists(filePath)).toBe(true)
      await fs.rm(tmpDir, { recursive: true })
    })

    it('should return false for non-existing file', async () => {
      const filePath = resolve(tmpDir, 'non-existent.txt')
      expect(await exists(filePath)).toBe(false)
    })
  })
}
