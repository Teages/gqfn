import antfu from '@antfu/eslint-config'

export const shared = antfu({
  rules: {
    curly: ['error', 'all'],
  },
})

export default shared.append({
  ignores: ['packages', 'docs'], // use packages's own eslint config
})
