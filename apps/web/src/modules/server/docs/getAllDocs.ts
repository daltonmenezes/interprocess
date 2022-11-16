import { readFile } from 'node:fs/promises'
import matter from 'gray-matter'

import { getParsedDocPaths } from './getParsedDocPaths'

export async function getAllDocs() {
  const paths = await getParsedDocPaths()

  const docs = await Promise.all(
    paths.map(async (path) => {
      const fileContent = await readFile(path.fullPath, 'utf8')
      const { data } = matter(fileContent)

      return {
        ...data,
        url: path.url,
        slug: path.slug,
        order: data.order || 0,
        title: data.title || path.slug,
      }
    })
  )

  return docs
}
