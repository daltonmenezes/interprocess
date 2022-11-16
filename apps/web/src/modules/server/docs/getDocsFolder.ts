import { resolve } from 'node:path'

import packageJSON from '../../../../package.json'

export function getDocsFolder() {
  return resolve(packageJSON?.docsFolder || 'docs')
}
