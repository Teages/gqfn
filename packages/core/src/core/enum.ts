export interface EnumPackage<T extends string> { (): T }

export function $enum<T extends string>(content: T): EnumPackage<T> {
  return () => content
}
