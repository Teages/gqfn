import { Command } from '@commander-js/extra-typings'
import { addClient, removeClient, syncClient } from './manager'

export function main() {
  let silent = false
  const program = new Command()
    .name('gqf')
    .version('0.0.1')
    .description('A CLI tool to generate GraphQL types for @teages/gqf.')
    .option('-s, --silent', 'Disable all output', false)
    .action((context) => {
      silent = context.silent
    })

  program.command('add')
    .description('Add a new GraphQL schema to @teages/gqf.')
    .argument('<urls...>', 'The URL(s) of the GraphQL schema to add.')
    .action(urls => addClient(urls, { silent }))

  program.command('remove')
    .description('Remove an existing GraphQL schema from @teages/gqf.')
    .argument('<urls...>', 'The URL(s) of the GraphQL schema to remove.')
    .action(urls => removeClient(urls, { silent }))

  program.command('sync')
    .description('Sync the GraphQL schema for @teages/gqf.')
    .action(() => syncClient({ silent }))

  program.parse()
}

main()
