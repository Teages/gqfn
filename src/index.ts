import { $enum, gqf, gqp } from './core'
import type { CreateGqf } from './utils/package'

export { $enum } from './core'
export type { RequireQueryPart, ResultOf, VariablesOf } from './typed'

export const createGqf: CreateGqf = () => ({ gqf, gqp, $enum }) as any
export { useSchema } from './cli'
