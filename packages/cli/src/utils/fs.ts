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
