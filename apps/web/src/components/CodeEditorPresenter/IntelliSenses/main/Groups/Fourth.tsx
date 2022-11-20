import { useEffect } from 'react'

import type { ItemGroup } from '../..'

import { PackageIcon } from 'components'

import { config } from 'styles'

export function FourthGroup({ activeItem, setStyles }: ItemGroup) {
  useEffect(() => {
    setStyles?.({
      top: '35.5rem',
      left: '8.7rem',
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
        <PackageIcon /> myAnotherIpcHandler
      </li>
    </ul>
  )
}
