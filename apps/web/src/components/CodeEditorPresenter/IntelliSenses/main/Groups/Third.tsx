import { useEffect } from 'react'

import type { ItemGroup } from '../..'

import { PackageIcon } from 'components'

import { config } from 'styles'

const groupItems = ['myIpcHandler', 'data']

export function ThirdGroup({ activeItem, setStyles }: ItemGroup) {
  useEffect(() => {
    if (activeItem === 0) {
      setStyles?.({
        top: '18.5rem',
        left: '24rem',
      })
    }

    if (activeItem === 1) {
      setStyles?.({
        top: '18.5rem',
        left: '33rem',
      })
    }
  }, [])

  return (
    <ul>
      {groupItems.map((content, index) => (
        <li
          key={content}
          style={
            activeItem === index
              ? {
                  backgroundColor: config.theme.colors['shape-tertiary'],
                }
              : {
                  backgroundColor: 'transparent',
                }
          }
        >
          <PackageIcon /> {content}
        </li>
      ))}
    </ul>
  )
}
