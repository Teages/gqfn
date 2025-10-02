import { execSync } from 'node:child_process'
import process from 'node:process'
import { command, string } from '@drizzle-team/brocli'
import {} from 'changelogen'
import fg from 'fast-glob'
import { resolve } from 'pathe'
import { readPackageJSON, writePackageJSON } from 'pkg-types'
import { simpleGit } from 'simple-git'
import { logger } from './utils'

export const bump = command({
  name: 'bump',
  desc: 'Bump the root version',
  options: {
    type: string()
      .enum('patch', 'minor', 'major', 'auto')
      .default('auto'),
  },
  handler: async (args) => {
    // Make sure the git working directory is clean
    const git = simpleGit()
    const status = await git.status()
    if (!status.isClean()) {
      logger.error('Git working directory is not clean')
      return process.exit(1)
    }

    // Bump version
    execSync([
      'pnpm changelogen',
      '--release',
      '--no-commit',
      '--no-tag',
      args.type !== 'auto' ? `--${args.type}` : '',
    ].filter(c => !!c).join(' '), { encoding: 'utf8' })

    // Sync the root version to packages
    const { version } = await readPackageJSON()
    logger.start(`Syncing root version ${version} to packages`)
    const pkgPaths = await fg.glob('packages/*/package.json')
    for (const pkgPath of pkgPaths) {
      const pkg = await readPackageJSON(resolve(pkgPath))
      const name = pkg.name

      if (pkg.version === version) {
        logger.info(`Skipping ${name} as it's already at ${version}`)
        continue
      }

      logger.info(`Updating ${name} from ${pkg.version} to ${version}`)
      pkg.version = version
      await writePackageJSON(pkgPath, pkg)
    }

    logger.success('Packages version is up to date.')
  },
})
