/* eslint-disable no-console */
import { readFileSync } from 'node:fs'

import { parseSchema } from '../src/schema/codegen/parse'
import { print } from '../src/schema/codegen/print'

console.log('working...')

const sdl = readFileSync('./playground/schema.graphql', 'utf8')

console.log(print(parseSchema(sdl)))
