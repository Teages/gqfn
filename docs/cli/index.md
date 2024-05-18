# Schema Loader CLI

## Generate Schema Types

There are two ways to generate schema types: command line and programmatic.

### Command Line

For most cases you just need to run the command line tool to generate the schema types.

The config will save at `gqf.config.json`.

```sh
pnpm run gqf add https://graphql.anilist.co
```

If the schema updated, you can use the `sync` command to reload all schema.

```sh
pnpm run gqf sync
```

Learn more about the [Command Line](./command.md).

### Programmatic

You can import the generator if you want to control the schema types generation.

```ts
import { sync } from '@teages/gqf/cli'

const output = await sync({
  clients: ['https://graphql.anilist.co'],
  silent: true, // disable logger
})

// write to file
```

Learn more about the [Programmatic Usage](./programmatic.md).

## `useSchema`

After generating the schema types, you can use the `useSchema` to get the typed `gqf` or `gqp`.

```ts
const { gqf, gqp, $enum } = useSchema('https://graphql.anilist.co')

const query = gqf('query FetchAnime', {
  id: 'Int!',
}, [{
  Media: $ => $({ id: $.id, type: $enum('ANIME') }, [
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

declare module '@teages/gqf/cli' {
  interface Schemas {
    'https://your-endpoint-url': Schema
  }
}
```
