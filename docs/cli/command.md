# Command Line

## Commands

### `gqfn init`

Create the config file if it doesn't exist.

```sh
npm run gqfn init
```

If the config file not exists, it will write a empty record to `gqfn.config.json`.

### `gqfn sync`

Sync the schema and generate types from the endpoint.

```sh
npm run gqfn sync
```

Options:
  - `-s`, `--silent`: Disable console output, default `false`

### `gqfn add`

Add a new GraphQL schema and sync all schemas.

```sh
npm run gqfn add https://graphql.anilist.co
```

Arguments:
  - `url`: The URL(s) of the GraphQL schema to add.

Options:
  - `-s`, `--silent`: Disable console output, default `false`

### `gqfn remove`

Remove a GraphQL schema and sync all schemas.

```sh
npm run gqfn remove https://graphql.anilist.co
```

Arguments:
  - `url`: The URL(s) of the GraphQL schema to remove.

Options:
  - `-s`, `--silent`: Disable console output, default `false`

## Config

See the [Configuration](./config.md) for more details.
