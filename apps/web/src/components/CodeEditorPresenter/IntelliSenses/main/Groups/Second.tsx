import { useEffect } from 'react'

import type { ItemGroup } from '../..'

import { PackageIcon } from 'components'

import { config } from 'styles'

export function SecondGroup({ activeItem, setStyles }: ItemGroup) {
  useEffect(() => {
    setStyles?.({
      top: '18.5rem',
      left: '7.5rem',
    })
  }, [])

  return (
    <ul>
      <li
        style={
          activeItem === 0
            ? {
                backgroundColor: config.theme.colors['shape-tertiary'],
              }
            : {
                backgroundColor: 'transparent',
              }
        }
      >
        <PackageIcon /> myIpcHandler
      </li>
    </ul>
  )
}
