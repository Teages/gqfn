import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '__generated__',
    'node_modules',
    'coverage',
    'dist',
    'playground/gqf.config.json',
    'playground/gqf',
  ],
}, {
  rules: {
    curly: ['error', 'all'],
  },
})
