import { serialize } from 'next-mdx-remote/serialize'
import { readFile } from 'node:fs/promises'
import matter from 'gray-matter'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGFM from 'remark-gfm'

import { getParsedDocPaths } from './getParsedDocPaths'

import type { Doc } from 'shared/types'

const fallbackDoc = {} as Doc

export async function getDoc(path: string): Promise<Doc> {
  if (!path) return fallbackDoc

  const paths = await getParsedDocPaths()
  const docPath = paths.find((docPath) => docPath.url === path)

  if (!docPath) return fallbackDoc

  const { data, content } = matter(await readFile(docPath.fullPath, 'utf8'))

  const MDXSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGFM],

      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  })

  return {
    ...data,
    url: docPath.url,
    slug: docPath.slug,
    source: MDXSource,
    title: data.title || docPath.slug.replace(/-/g, ' '),
  }
}
