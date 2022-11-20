import { useEffect } from 'react'

import type { ItemGroup } from '../..'

import { PackageIcon } from 'components'

import { config } from 'styles'

const groupItems = ['handle', 'invoke', 'remove']

export function FirstGroup({ activeItem, setStyles }: ItemGroup) {
  useEffect(() => {
    if (activeItem === 0) {
      setStyles((prevStyles) => ({
        ...prevStyles,
        left: '6.5rem',
      }))
    }

    if (activeItem === 1) {
      setStyles((prevStyles) => ({
        ...prevStyles,
        left: '12rem',
      }))
    }
  }, [activeItem])

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
