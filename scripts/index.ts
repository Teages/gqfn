import { run } from '@drizzle-team/brocli'
import { bump } from './bump'
import { preRelease } from './pre-release'

run([bump, preRelease])
