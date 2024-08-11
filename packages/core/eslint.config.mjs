import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '__generated__',
    'node_modules',
    'coverage',
    'dist',
    'playground/gqfn.config.json',
    'playground/gqfn',
  ],
}, {
  rules: {
    curly: ['error', 'all'],
  },
})
