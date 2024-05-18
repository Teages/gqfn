# Command Line

## Commands

### `gqf init`

Create the config file if it doesn't exist.

```sh
npm run gqf init
```

If the config file not exists, it will write a empty record to `gqf.config.json`.

### `gqf sync`

Sync the schema and generate types from the endpoint.

```sh
npm run gqf sync
```

Options:
  - `-s`, `--silent`: Disable console output, default `false`

### `gqf add`

Add a new GraphQL schema and sync all schemas.

```sh
npm run gqf add https://graphql.anilist.co
```

Arguments:
  - `url`: The URL(s) of the GraphQL schema to add.

Options:
  - `-s`, `--silent`: Disable console output, default `false`

### `gqf remove`

Remove a GraphQL schema and sync all schemas.

```sh
npm run gqf remove https://graphql.anilist.co
```

Arguments:
  - `url`: The URL(s) of the GraphQL schema to remove.

Options:
  - `-s`, `--silent`: Disable console output, default `false`

## Config

See the [Configuration](./config.md) for more details.
