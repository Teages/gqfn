#!/usr/bin/env node
import { Command } from '@commander-js/extra-typings'
import { add, init, sync } from './command'

export function main() {
  const program = new Command()
    .name('gqfn')
    .version('0.0.1')
    .description('A CLI tool to generate GraphQL types for @gqfn/core.')
    .action(() => program.help())

  program.command('init')
    .description('Initialize the @gqfn/core configuration.')
    .option('-s, --silent', 'Disable all output', false)
    .action(async ({ silent }) => {
      await init({ silent })
    })

  program.command('add')
    .description('Add a new GraphQL schema to @gqfn/core.')
    .argument('<urls...>', 'The URL(s) of the GraphQL schema to add.')
    .option('-s, --silent', 'Disable all output', false)
    .action(async (clients, { silent }) => {
      await add({ clients, silent })
    })

  program.command('sync')
    .description('Sync the GraphQL schema for @gqfn/core.')
    .option('--ignore-error', 'Ignore errors when syncing the schema.', false)
    .option('-s, --silent', 'Disable all output', false)
    .action(async ({ ignoreError, silent }) => {
      await sync({ ignoreError, silent })
    })

  program.parse()
}

main()
