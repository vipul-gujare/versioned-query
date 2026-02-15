export const resolve = <T>(valueOrFn: T | (() => T)): T =>
  typeof valueOrFn === "function" ? (valueOrFn as () => T)() : valueOrFn;
