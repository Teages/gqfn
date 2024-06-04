/* eslint-disable no-console */
import { print } from 'graphql'
import { addClient, removeClient, syncClient } from '@teages/gqf/cli/manager'
import { useSchema } from '@teages/gqf/cli'

console.log('working...')

;(async () => {
  await syncClient()
})()
