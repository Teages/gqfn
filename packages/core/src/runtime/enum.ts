export interface EnumPackage<T extends string> { (): T }

export interface DollarEnumFunction {
  <T extends string>(content: T): EnumPackage<T>
}

export const $enum: DollarEnumFunction = (content) => {
  return () => content
}
