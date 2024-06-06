import { $enum, gqf, gqp } from './core'
import type { DefineGqf } from './utils/package'

export { $enum } from './core'
export type { RequireQueryPart, ResultOf, VariablesOf } from './typed'

export const defineGqf: DefineGqf = () => ({ gqf, gqp, $enum }) as any
export { useSchema } from './cli'
