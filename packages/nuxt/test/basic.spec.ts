import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('basic', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('client', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('user: Teages (1)')
  })

  it('server', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const ret = await $fetch('/api')
    expect(ret).toMatchObject({
      data: {
        users: [
          {
            id: '1',
            name: 'Teages',
            __typename: 'User',
          },
        ],
      },
    })
  })
})
