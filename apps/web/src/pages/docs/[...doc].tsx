import { MDXProvider } from '@mdx-js/react'

import {
  getDoc,
  getDocLinks,
  getParsedDocPaths,
  getDocPaginationNavigator,
} from 'modules'

import { createMDXComponents, Head } from 'components'
import { DocsTemplate } from 'templates'
import { meta } from 'shared/constants'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'node:querystring'
import type { DocProps } from 'shared/types'

interface GetStaticPropsParams extends ParsedUrlQuery {
  doc: string[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getParsedDocPaths()

  const paths = docs.map((doc) => ({
    params: {
      doc: doc.url.split('/'),
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<
  DocProps,
  GetStaticPropsParams
> = async (context) => {
  const docPath = context.params?.doc?.join('/') || ''

  const doc = await getDoc(docPath)
  const links = await getDocLinks()
  const pagination = await getDocPaginationNavigator(docPath)

  return {
    props: {
      doc,
      links,
      pagination,
    },
  }
}

export default function Docs(docs: DocProps) {
  return (
    <>
      <Head
        meta={{
          ...meta,
          title: `${docs.doc.title} - ${meta.title}`,
        }}
      />

      <MDXProvider components={createMDXComponents()}>
        <DocsTemplate {...docs} />
      </MDXProvider>
    </>
  )
}
