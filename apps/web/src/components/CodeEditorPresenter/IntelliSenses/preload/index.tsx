import { codes } from 'shared/constants'

import { IntelliSenseTab, TabProps } from '..'
import { FirstGroup } from './Groups/First'

export function PreloadIntelliSenseTab({
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
        if (codes.preload.firstCheckToShowIntelliSense === text) {
          handleIntelliSense({})
        }
      }}
    />
  )
}
