import type { Schemas } from '@gqfn/core/schema'
import type { GraphQueryFunctionCore } from '../../src/types/operation'

type AniListSchema = Schemas['https://graphql.anilist.co']
declare const gqfn: GraphQueryFunctionCore<AniListSchema>

// Complex AniList query: the FetchAnime playground scenario
// Variables, enum arguments, nested object selection (Media → title)
const _q = gqfn('query FetchAnime', {
  id: 'Int = 127549',
}, [{
  Media: $ => $({ id: $.vars.id, type: $.enum('ANIME') }, [
    'id',
    {
      title: $ => $([
        'romaji',
        'english',
        'native',
      ]),
    },
  ]),
}])
