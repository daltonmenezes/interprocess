import { getMetaFile } from './getMetaFile'
import { getAllDocs } from './getAllDocs'

import type { LinkKeys, Links } from 'shared/types'

export async function getDocLinks() {
  const paths = await getAllDocs()
  const meta = await getMetaFile()

  let links = paths.reduce((acc, path) => {
    const [rootSection] = path.url.split('/') as LinkKeys[]
    const { title, slug, url, order } = path
    const links = acc[rootSection] || []

    return {
      ...acc,

      [rootSection]: [
        ...links,

        {
          url,
          order,
          title: title || slug.replace(/-/g, ' '),
        },
      ],
    }
  }, {} as Links)

  if (meta?.order) {
    const metaOrder = meta.order as LinkKeys[]
    const orderedKeys = metaOrder.filter((key) => links[key])

    const keys = [
      ...new Set([...orderedKeys, ...Object.keys(links)]),
    ] as LinkKeys[]

    links = keys.reduce((acc, rootSection) => {
      const link = links[rootSection] || []

      return {
        ...acc,

        [rootSection]: link?.sort((a, b) => {
          const orderA = a.order === 0 ? 999 : a.order
          const orderB = b.order === 0 ? 999 : b.order

          return orderA - orderB
        }),
      }
    }, {} as Links)
  }

  return links
}
