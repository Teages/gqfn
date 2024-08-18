import { command } from '@drizzle-team/brocli'
import { readPackageJSON } from 'pkg-types'
import simpleGit from 'simple-git'

export const preRelease = command({
  name: 'pre-release',
  desc: 'make a git commit and tag for release',
  handler: async () => {
    const { version } = await readPackageJSON()
    const commitMessage = `chore(release): v${version}`
    const tagName = `v${version}`
    const tagBody = `v${version}`

    const git = simpleGit()
    await git.add('.')
    await git.commit(commitMessage)
    await git.addAnnotatedTag(tagName, tagBody)
    console.log(`Committed and tagged "${tagName}" with message "${tagBody}"`)
  },
})
