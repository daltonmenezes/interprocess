import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { Tree } from './Tree'
import { Link } from './Link'

import type { Links } from 'shared/types'

interface DocLinkTreeProps {
  links: Links
}

export function DocLinkTree({ links }: DocLinkTreeProps) {
  const route = useRouter()

  const activeLink = useMemo(
    () =>
      Object.values(links)
        .flat()
        .find((link) => link.url === (route.query.doc as string[])?.join('/'))
        ?.title,
    [route.query.doc]
  )

  return (
    <ul>
      {Object.values(links).map((links) => {
        const sections = links.map(({ url }) => url.split('/').slice(0, -1))

        return (
          <li key={sections[0].join()}>
            <div>
              <Tree
                sections={sections}
                renderLinks={(section) =>
                  links
                    .filter(({ url }) => url.includes(section))
                    .map(({ title, url }) => {
                      const URL = `/docs/${url}`

                      return (
                        <li key={URL}>
                          <Link href={URL} active={activeLink === title}>
                            {title}
                          </Link>
                        </li>
                      )
                    })
                }
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
