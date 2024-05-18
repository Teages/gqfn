import { Variable } from './variable'

export interface DollarFunction {
  <T, U>(arg: T, selection: U): [T, U]
  <T extends string>(enumValue: T): DollarEnum<T>
}

export class DollarEnum<T extends string> {
  #value: T
  constructor(value: T) { this.#value = value }
  get value() {
    return this.#value
  }
}

export type DollarPayload = Record<string, Variable<string>>

export type Dollar<T extends DollarPayload> = DollarFunction & T

export function initDollar<T extends DollarPayload>(): Dollar<T> {
  return new Proxy(
    (arg: unknown, selection?: unknown) => {
      if (selection === undefined) {
        return new DollarEnum(arg as any)
      }
      return [arg, selection]
    },
    {
      get(_target, name: string) {
        return new Variable(name)
      },
    },
  ) as Dollar<T>
}
