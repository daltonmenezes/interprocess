import { parse } from 'node:path'

import { getAllMDXFilePaths } from './getAllMDXFilePaths'
import { getDocsFolder } from './getDocsFolder'

export async function getParsedDocPaths() {
  const docsFolder = getDocsFolder()
  const filePaths = await getAllMDXFilePaths(docsFolder)

  const parsedDocPaths = filePaths.map((file) => ({
    path: file.replace(docsFolder, ''),
    fullPath: file,
    url: file.replace(`${docsFolder}/`, '').replace(/.mdx$/, ''),
    slug: parse(file).name,
  }))

  return parsedDocPaths
}
