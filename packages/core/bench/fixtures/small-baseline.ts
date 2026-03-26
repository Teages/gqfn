import type { GraphQueryFunctionCore } from '../../src/types/operation'
import type { Schema } from './schema'

// Baseline: instantiate the core function type only, no query
declare const gqfn: GraphQueryFunctionCore<Schema>
void gqfn
