export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`

export function parseOperation(
  name: OperationName,
): { type: OperationTypes, name: string } {
  const [type, namePart] = name.split(' ')
  return {
    type: type as OperationTypes,
    name: namePart || '',
  }
}
