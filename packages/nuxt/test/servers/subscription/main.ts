#!/usr/bin/env node
import process from 'node:process'
import { startServer } from './server'

async function main() {
  await using server = await startServer()
  // eslint-disable-next-line no-console
  console.log(`Server started on http://localhost:${server.port}/graphql`)

  // close the server when the process is terminated
  await new Promise<void>((resolve) => {
    process.on('exit', () => {
      // eslint-disable-next-line no-console
      console.log('Server shutting down...')
      resolve()
      process.exit(0)
    })
  })
}

main()
