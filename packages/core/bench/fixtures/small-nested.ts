import type { GraphQueryFunctionCore } from '../../src/types/operation'
import type { Schema } from './schema'

declare const gqfn: GraphQueryFunctionCore<Schema>

// Nested object query: one level of object nesting
const _q = gqfn([{
  user: $ => $({ id: 1 }, [
    'id',
    'name',
    'email',
  ]),
}])
