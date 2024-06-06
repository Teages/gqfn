#!/usr/bin/env node

import { Command } from '@commander-js/extra-typings'
import { addClient, init, removeClient, syncClient } from './manager'

export function main() {
  const program = new Command()
    .name('gqf')
    .version('0.0.1')
    .description('A CLI tool to generate GraphQL types for @teages/gqf.')
    .action(() => program.help())

  program.command('init')
    .description('Initialize the @teages/gqf configuration.')
    .option('-s, --silent', 'Disable all output', false)
    .action(({ silent }) => init(silent))

  program.command('add')
    .description('Add a new GraphQL schema to @teages/gqf.')
    .argument('<urls...>', 'The URL(s) of the GraphQL schema to add.')
    .option('-s, --silent', 'Disable all output', false)
    .action((urls, { silent }) => addClient(urls, { silent }))

  program.command('remove')
    .description('Remove an existing GraphQL schema from @teages/gqf.')
    .argument('<urls...>', 'The URL(s) of the GraphQL schema to remove.')
    .option('-s, --silent', 'Disable all output', false)
    .action((urls, { silent }) => removeClient(urls, { silent }))

  program.command('sync')
    .description('Sync the GraphQL schema for @teages/gqf.')
    .option('-s, --silent', 'Disable all output', false)
    .action(({ silent }) => syncClient({ silent }))

  program.parse()
}

main()
