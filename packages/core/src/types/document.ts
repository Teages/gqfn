import type { DocumentNode } from '@0no-co/graphql.web'

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
