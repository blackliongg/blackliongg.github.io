export const model = <T>(initial: Partial<T>): (extend: Partial<T>) => T =>
  (extend: Partial<T>): T =>
    Object.assign(initial, extend) as T;
