import { useEffect } from 'react'

import type { ItemGroup } from '../..'

import { PackageIcon } from 'components'

import { config } from 'styles'

export function FirstGroup({ activeItem, setStyles }: ItemGroup) {
  useEffect(() => {
    if (activeItem === 0) {
      setStyles((prevStyles) => ({
        ...prevStyles,
        top: '3rem',
        left: '6rem',
      }))
    }
  }, [activeItem])

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
