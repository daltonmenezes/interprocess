type ReturnTypes =
  | 'object'
  | 'array'
  | 'date'
  | 'function'
  | 'string'
  | 'number'
  | 'blob'
  | 'promise'
  | 'function'
  | 'boolean'
  | 'regexp'
  | 'undefined'
  | 'null'

export function getType(it: unknown) {
  return Object.prototype.toString
    .call(it)
    .replace(/[\[\]]|object +/g, '')
    .toLowerCase() as ReturnTypes
}
