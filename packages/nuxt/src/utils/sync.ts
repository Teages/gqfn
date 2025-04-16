import type { ClientConfig } from '@gqfn/cli'
import { generateFilenameFromUrl, sync } from '@gqfn/cli'

interface SyncResult {
  output: Array<{
    filename: string
    url: string
    content: string
  }>
  success: string[]
  failed: string[]
}

export async function syncSchema(clients: ClientConfig[]): Promise<SyncResult> {
  const { result, errors } = await sync(clients)

  const output = Object.entries(result).map(([url, content]) => ({
    filename: `${generateFilenameFromUrl(url)}.d.ts`,
    url,
    content,
  }))

  const success = Object.keys(result)
  const failed = errors ? Object.keys(errors) : []

  return {
    output,
    success,
    failed,
  }
}
