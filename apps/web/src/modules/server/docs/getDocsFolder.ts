import { resolve } from 'node:path'

import normalize from 'normalize-path'

import packageJSON from '../../../../package.json'

export function getDocsFolder() {
  return normalize(resolve(packageJSON?.docsFolder || 'docs'))
}
