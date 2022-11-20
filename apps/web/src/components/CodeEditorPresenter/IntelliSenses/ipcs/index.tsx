import { codes } from 'shared/constants'

import { IntelliSenseTab, TabProps } from '..'
import { FirstGroup } from './Groups/First'

export function IpcsIntelliSenseTab({
  text,
  controller,
  containerRef,
}: TabProps) {
  return (
    <IntelliSenseTab
      popupItemGroups={[FirstGroup]}
      containerRef={containerRef}
      controller={controller}
      text={text}
      handler={(handleIntelliSense) => {
        if (codes.ipcs.firstCheckToShowIntelliSense === text) {
          handleIntelliSense({})
        }

        if (codes.ipcs.secondCheckToShowIntelliSense === text) {
          handleIntelliSense({ activeItem: 1 })
        }
      }}
    />
  )
}
