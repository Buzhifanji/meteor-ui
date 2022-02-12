export function log(...rest: any[]) {
  console.log.apply(console, rest);
}

export function warn(...rest: any[]) {
  console.warn.apply(console, rest);
}
