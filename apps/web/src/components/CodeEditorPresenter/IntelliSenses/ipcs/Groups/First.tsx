import { useEffect } from 'react'

import type { ItemGroup } from '../..'

import { PackageIcon } from 'components'

import { config } from 'styles'

const groupItems = ['main?', 'renderer?']

export function FirstGroup({ activeItem, setStyles }: ItemGroup) {
  useEffect(() => {
    if (activeItem === 0) {
      setStyles((prevStyles) => ({
        ...prevStyles,
        top: '3rem',
      }))
    }

    if (activeItem === 1) {
      setStyles((prevStyles) => ({
        ...prevStyles,
        top: '15rem',
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
