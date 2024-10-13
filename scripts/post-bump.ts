import { command } from '@drizzle-team/brocli'
import fg from 'fast-glob'
import { resolve } from 'pathe'
import { readPackageJSON, writePackageJSON } from 'pkg-types'
import { logger } from './utils'

export const postBump = command({
  name: 'post-bump',
  desc: 'Sync the root version to packages',
  handler: async () => {
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
