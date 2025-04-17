# Schema Loader CLI

## Generate Schema Types

There are two ways to generate schema types: command line and programmatic.

### Command Line

For most cases you just need to run the command line tool to generate the schema types.

The config will save at `gqfn.config.json`.

```sh
pnpm run gqfn add https://graphql.anilist.co
```

If the schema updated, you can use the `sync` command to reload all schema.

```sh
pnpm run gqfn sync
```

Learn more about the [Command Line](./command.md).

### Programmatic

You can import the generator if you want to control the schema types generation.

```ts twoslash
import { sync } from '@gqfn/cli'

const { result, errors } = await sync(['https://graphql.anilist.co'])
```

Learn more about the [Programmatic Usage](./programmatic.md).

## `useSchema`

After generating the schema types, you can use the `useSchema` to get the typed `gqfn` or `gqp`.

```ts twoslash
import { useGQFnSchema } from '@gqfn/core'
// ---cut---
const endpoint = 'https://graphql.anilist.co'
const gqfn = useGQFnSchema(endpoint)

const query = gqfn('query FetchAnime', {
  id: 'Int!',
}, [{
  Media: $ => $({ id: $.id, type: gqfn.enum('ANIME') }, [
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
```

If you manually write your schema type, you can configure it to use in `useSchema`.

``` ts
export type Schema = DefineSchema<{
  // Your schema type
}>

declare module '@gqfn/core/schema' {
  interface Schemas {
    'https://your-endpoint-url': Schema
  }
}
```
