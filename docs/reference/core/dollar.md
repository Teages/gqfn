# `$` and Dollar Function

The `$` is used to define variables with directives, select type objects and visit variables in the query builder.

## Example

### `$` in Selection

Use `$` to visit your variables, select type objects and use directives.

::: code-group
```ts [Query Builder]
const query = gqf('query FetchUser', {
  id: 'ID!',
  withFriends: 'Boolean! = true',
}, [
  'hi',
  {
    users: $ => $({ id: $.id }, [
      'id',
      'name',
      {
        friends: $ => $([
          'id',
          'name',
        ], [
          ['@include', { if: $.withFriends }],
        ]),
      },
    ]),
  },
])
```

```graphql [GraphQL Query]
query FetchUser($id: ID!, $withFriends: Boolean! = true) {
  hi
  users(userId: $id) {
    id
    name
    friends @include(if: $withFriends) {
      id
      name
    }
  }
}
```
:::

### `$` in Variable Definition

Use `$` to define variables with directives.

::: code-group
```ts [Query Builder]
const query = gqf('query', {
  varWithDirective: $ => $('String!', [
    ['@exampleDirective', { arg: 'value' }],
  ]),
}, ['hello'])
```

```graphql [GraphQL Query]
query ($varWithDirective: String! @exampleDirective(arg: "value")) {
  hello
}
```
:::

### `$` in Directive

Use `$` to define directives in root of query operation with variables.

::: code-group
```ts [Query Builder]
const query = gqf('query', {
  someVar: 'String!',
}, [
  'hello',
], $ => [
  ['@exampleDirective', { arg: $.someVar }],
])
```

```graphql [GraphQL Query]
query ($someVar: String!) @exampleDirective(arg: $someVar) {
  hello
}
```
:::

## Type Definition

```ts
// Used in selection
export type SelectionDollar<Var extends DollarPayload> = SelectionDollarFunction<Var> & Var

// Used in root directive
export type DirectiveDollar<Var extends DollarPayload> = Var

// Used in variable definition
export type VariableDollar<Var extends DollarPayload> = VariableDollarFunction

export interface SelectionDollarFunction {
  <T extends true | TypeSelection>(
    selection: T,
    directive?: Array<DirectiveInput>
  ): DollarContext<T>

  <T extends true | TypeSelection>(
    arg: Argument,
    selection: T,
    directive?: Array<DirectiveInput>
  ): DollarContext<T>
}

export interface VariableDollarFunction {
  (
    args: string,
    directive: Array<DirectiveInput>
  ): DollarContext<string>
}

export type DollarPayload = Record<string, Variable<string>>
export interface DollarContext<T> {
  content: T
  args: Argument
  directives: Array<DirectiveInput>
}
```
