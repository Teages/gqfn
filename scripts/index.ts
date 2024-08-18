import { run } from '@drizzle-team/brocli'
import { postBump } from './post-bump'
import { preBump } from './pre-bump'
import { preRelease } from './pre-release'

run([preBump, postBump, preRelease])
