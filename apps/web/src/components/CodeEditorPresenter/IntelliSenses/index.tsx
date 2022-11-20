import type { CSSProperties, Dispatch, SetStateAction } from 'react'
import { useState, RefObject, useEffect } from 'react'

import { IntelliSense } from '../styles'

export interface TabProps {
  containerRef: RefObject<HTMLDivElement>
  text: string
  controller: {
    pause: () => void
    resume: () => void
    isFinished: boolean
  }
}

export interface ItemGroup {
  activeItem: number
  setStyles: Dispatch<SetStateAction<CSSProperties>>
}

export interface IntelliSenseHandler {
  activeItem?: number
  activePopupGroup?: number
}

interface IntelliSenseTabProps extends TabProps {
  popupItemGroups: ((props: ItemGroup) => JSX.Element)[]
  handler: (handleIntelliSense: (props: IntelliSenseHandler) => void) => void
}

const intelliSenseTimeout = 1000

const defaultStyles = {
  top: '3rem',
  left: '3.8rem',
}

export function IntelliSenseTab({
  text,
  handler,
  controller,
  containerRef,
  popupItemGroups,
}: IntelliSenseTabProps) {
  const [activeItem, setActiveItem] = useState(0)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const [activePopupGroup, setActivePopupGroup] = useState(0)
  const [styles, setStyles] = useState<CSSProperties>(defaultStyles)

  const ItemGroup = popupItemGroups[activePopupGroup]

  function handleIntelliSense({
    activeItem,
    activePopupGroup,
  }: {
    activeItem?: number
    activePopupGroup?: number
  } = {}) {
    controller.pause()

    setActiveItem(activeItem || 0)
    setShouldDisplay(true)
    setActivePopupGroup(activePopupGroup || 0)

    setTimeout(() => {
      controller.resume()
      setShouldDisplay(false)
      setActiveItem(0)
      setStyles(defaultStyles)
    }, intelliSenseTimeout)
  }

  useEffect(() => {
    const container = containerRef.current

    container!.scrollTo(0, container!.scrollHeight)

    handler(handleIntelliSense)
  }, [text, containerRef.current])

  useEffect(() => {
    if (controller.isFinished) {
      setActiveItem(0)
      setShouldDisplay(false)
      setActivePopupGroup(0)
      setStyles(defaultStyles)
    }
  }, [controller.isFinished])

  return shouldDisplay ? (
    <IntelliSense style={styles}>
      <ItemGroup setStyles={setStyles} activeItem={activeItem} />
    </IntelliSense>
  ) : null
}
