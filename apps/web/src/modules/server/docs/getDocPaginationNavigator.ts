import { getDocLinks } from './getDocLinks'

import type { Pagination } from 'shared/types'

export async function getDocPaginationNavigator(
  currentDoc: string
): Promise<Pagination> {
  const docLinks = await getDocLinks()
  const links = Object.values(docLinks).flat()

  const index = links.findIndex((path) => path.url === currentDoc)

  const previousDoc = links[index - 1] || {}
  const nextDoc = links[index + 1] || {}

  const hasPreviousDoc = !!previousDoc.url
  const hasNextDoc = !!nextDoc.url

  const previousSectionPathNames = previousDoc?.url?.split('/').slice(0, -1)
  const nextSectionPathNames = nextDoc?.url?.split('/').slice(0, -1)

  function unslugifySectionPathNames(sectionPathNames: string[]) {
    return sectionPathNames?.map((pathName) => pathName.replace('-', ' ')) || []
  }

  return {
    next: {
      ...nextDoc,

      sections: {
        raw: nextSectionPathNames || [],
        sanitized: unslugifySectionPathNames(nextSectionPathNames),
      },
    },

    previous: {
      ...previousDoc,

      sections: {
        raw: previousSectionPathNames || [],
        sanitized: unslugifySectionPathNames(previousSectionPathNames),
      },
    },

    hasNext: hasNextDoc,
    hasPrevious: hasPreviousDoc,
  }
}
