import type { GraphQueryFunctionCore } from '../../src/types/operation'
import type { Schema } from './schema'

declare const gqfn: GraphQueryFunctionCore<Schema>

// Simple scalar-only query (no nested objects)
const _q = gqfn(['hello', '__typename'])
