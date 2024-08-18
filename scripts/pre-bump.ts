import process from 'node:process'
import { command } from '@drizzle-team/brocli'
import { simpleGit } from 'simple-git'
import { logger } from './utils'

export const preBump = command({
  name: 'pre-bump',
  desc: 'Make sure the git working directory is clean',
  handler: async () => {
    const git = simpleGit()
    const status = await git.status()
    if (!status.isClean()) {
      logger.error('Git working directory is not clean')
      return process.exit(1)
    }
  },
})
