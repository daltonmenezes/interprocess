import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { getDocsFolder } from './getDocsFolder'

export async function getMetaFile() {
  const metaFilePath = resolve(getDocsFolder(), 'meta.json')
  const metaFileContent = await readFile(metaFilePath, 'utf8').catch(() => '{}')

  return JSON.parse(metaFileContent)
}
