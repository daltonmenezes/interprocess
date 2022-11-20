import { codes } from 'shared/constants'

import { IntelliSenseTab, TabProps } from '..'

import { FirstGroup } from './Groups/First'
import { SecondGroup } from './Groups/Second'
import { ThirdGroup } from './Groups/Third'
import { FourthGroup } from './Groups/Fourth'

const popupItemGroups = [FirstGroup, SecondGroup, ThirdGroup, FourthGroup]

export function MainIntelliSenseTab({
  text,
  controller,
  containerRef,
}: TabProps) {
  return (
    <IntelliSenseTab
      popupItemGroups={popupItemGroups}
      containerRef={containerRef}
      controller={controller}
      text={text}
      handler={(handleIntelliSense) => {
        if (codes.main.firstCheckToShowIntelliSense === text) {
          handleIntelliSense({})
        }

        if (codes.main.secondCheckToShowIntelliSense === text) {
          handleIntelliSense({ activeItem: 1 })
        }

        if (codes.main.thirdCheckToShowIntelliSense === text) {
          handleIntelliSense({ activeItem: 0, activePopupGroup: 1 })
        }

        if (codes.main.fourthCheckToShowIntelliSense === text) {
          handleIntelliSense({ activeItem: 0, activePopupGroup: 2 })
        }

        if (codes.main.fifthCheckToShowIntelliSense === text) {
          handleIntelliSense({ activeItem: 1, activePopupGroup: 2 })
        }

        if (codes.main.sixthCheckToShowIntelliSense === text) {
          handleIntelliSense({ activeItem: 0, activePopupGroup: 3 })
        }
      }}
    />
  )
}
