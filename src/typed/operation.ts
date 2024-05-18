export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`

export type GetOperationType<T extends OperationName> =
  T extends `query${string}` ? 'Query'
    : T extends `mutation${string}` ? 'Mutation'
      : T extends `subscription${string}` ? 'Subscription'
        : never
