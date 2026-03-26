import type { GraphQueryFunctionCore } from '../../src/types/operation'
import type { Schema } from './schema'

declare const gqfn: GraphQueryFunctionCore<Schema>

// Complex query: variables, multiple nested objects, directives, enum arguments
const _q = gqfn('query Complex', { name: 'String! = "world"', userId: 'Int!' }, [{
  hello: $ => $({ name: $.vars.name }, true)
    .withDirective(['@skip', { if: true }]),
  user: $ => $({ id: $.vars.userId }, [
    'id',
    'name',
    'email',
    {
      friends: $ => $([
        'id',
        'name',
      ]),
      sayings: $ => $({ category: $.enum('funny') }, [
        'id',
        'content',
      ]),
    },
  ]),
}])
