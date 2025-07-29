# Typed Document Node

TypedDocumentNode is the typed version of `DocumentNode` from the `graphql` package.

It provides a way to create fully typed GraphQL operations, ensuring that both the query and its variables are type-safe.

## Type Reference

```ts
export interface TypedDocumentNode<
  Result = Record<string, any>,
  Variables = Record<string, any>,
> extends DocumentNode {
  /**
   * `TypedDocumentNode` from `@graphql-typed-document-node/core`
   * @internal
   */
  __apiType?: (variables: Variables) => Result
  /**
   * `TypedQueryDocumentNode` from `graphql`
   * @internal
   */
  __ensureTypesOfVariablesAndResultMatching?: (variables: Variables) => Result
}

export type ResultOf<T> = T extends TypedDocumentNode<infer Result, any>
  ? Result
  : unknown

export type VariablesOf<T> = T extends TypedDocumentNode<any, infer Variables>
  ? Variables
  : unknown
```
