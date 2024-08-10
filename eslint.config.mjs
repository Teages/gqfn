import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['packages'], // use packages's own eslint config
}, {
  rules: {
    curly: ['error', 'all'],
  },
}, {
  // disable unnecessary rules for markdown files
  files: ['docs/**/*.md/*.ts', 'docs/**/*.md/*.js'],
  rules: {
    'ts/no-empty-object-type': 'off',
  },
})
