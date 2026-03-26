import { bench, describe } from 'vitest'
import { measureFixture, scenarios } from './helpers'

for (const [group, items] of Object.entries(scenarios)) {
  describe(group, () => {
    for (const scenario of items) {
      bench(scenario.name, () => {
        measureFixture(scenario.files)
      }, {
        iterations: 5,
        time: 0,
        warmupIterations: 1,
        warmupTime: 0,
      })
    }
  })
}
