import { defineCommand, runMain } from 'citty'

const main = defineCommand({
  meta: {
    name: '@teages/gqf',
    version: '0.0.1',
    description: '@teages/gqf CLI',
  },
  setup() {
    console.log('Setup')
  },
  cleanup() {
    console.log('Cleanup')
  },
  subCommands: {
  },
})

runMain(main)
