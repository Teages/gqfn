export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`
