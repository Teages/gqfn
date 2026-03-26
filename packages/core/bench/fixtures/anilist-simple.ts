import type { Schemas } from '@gqfn/core/schema'
import type { GraphQueryFunctionCore } from '../../src/types/operation'

type AniListSchema = Schemas['https://graphql.anilist.co']
declare const gqfn: GraphQueryFunctionCore<AniListSchema>

// Simple AniList query: single scalar field
const _q = gqfn([{
  Media: $ => $({ id: 1 }, [
    'id',
  ]),
}])
