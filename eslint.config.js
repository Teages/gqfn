import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '__generated__',
    'node_modules',
    'coverage',
    'dist',
  ],
}, {
  rules: {
    curly: ['error', 'all'],
  },
}, {
  // conflict with changelogen: remove after https://github.com/unjs/changelogen/issues/170
  files: ['package.json'],
  name: 'teages:changelogen-package-json',
  rules: {
    'style/eol-last': ['error', 'never'],
  },
})
