export type OperationTypes = 'query' | 'mutation' | 'subscription'
export type OperationName = OperationTypes | `${OperationTypes} ${string}`

export type FragmentType = 'fragment'
export type FragmentName = `${FragmentType} ${string}`

export function parseOperationName(
  name: OperationName,
): { type: OperationTypes, name?: string } {
  const [type, namePart] = name.split(' ', 2)

  if (!['query', 'mutation', 'subscription'].includes(type)) {
    throw new TypeError(`Invalid type '${type}', expected 'query', 'mutation', or 'subscription'`)
  }

  return {
    type: type as OperationTypes,
    name: namePart?.trim() || undefined,
  }
}

export function parseFragmentName(
  name: FragmentName,
  base: `on ${string}`,
): { type: FragmentType, name: string, typeCondition: string } {
  const [type, namePart] = name.split(' ', 2)
  const baseDef = base.split(' ', 2)[1]

  if (type !== 'fragment') {
    throw new TypeError(`Invalid type '${type}', expected 'fragment'`)
  }

  if (!namePart.trim()) {
    throw new TypeError('Fragment name is required')
  }

  return {
    type,
    name: namePart.trim(),
    typeCondition: baseDef,
  }
}
