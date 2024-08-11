import { $enum, gqfn, gqp } from './core'
import type { CreateGQFn } from './utils/package'

export { $enum } from './core'
export type { RequireQueryPart, ResultOf, VariablesOf } from './typed'

export const createGQFn: CreateGQFn = () => ({ gqfn, gqp, $enum }) as any
export { useSchema } from './cli'
