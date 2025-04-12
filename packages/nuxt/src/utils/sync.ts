import type { ClientConfig } from '@gqfn/cli'
import { sync } from '@gqfn/cli'

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
  const output = await sync({
    clients,
    silent: true,
    output: '',
  }) as Array<{
    filename: string
    url: string
    content: string
  }>

  const success = clients
    .map(client => typeof client === 'object' ? client.url : client)
    .filter(url => output.some(
      o => o.url === url,
    ))
  const failed = clients
    .map(client => typeof client === 'object' ? client.url : client)
    .filter(url => !success.includes(url))

  return {
    output,
    success,
    failed,
  }
}
