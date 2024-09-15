export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`

export function parseOperation(
  name: OperationName,
): { type: OperationTypes, name?: string } {
  const [type, namePart] = name.split(' ', 2)

  if (!['query', 'mutation', 'subscription'].includes(type)) {
    throw new TypeError(`Invalid operation type: ${type}`)
  }

  return {
    type: type as OperationTypes,
    name: namePart?.trim() || undefined,
  }
}
