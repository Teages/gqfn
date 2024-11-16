export interface EnumPackage<T extends string> { (): T }

export interface EnumFunction {
  <T extends string>(content: T): EnumPackage<T>
}

export function createEnumFunction(): EnumFunction {
  return <T extends string>(content: T) => () => content
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('createEnumFunction', () => {
    const enumFn = createEnumFunction()
    expect(typeof enumFn).toBe('function')

    expect(enumFn('HELLO')()).toBe('HELLO')
    expect(enumFn('WORLD')()).toBe('WORLD')
  })
}
