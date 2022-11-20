import { useWindupString, WindupChildren, textFromChildren } from 'windups'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ScrollableContainer from 'react-indiana-drag-scroll'

import { getPublicPath } from 'shared/utils'
import { codes, tabs } from 'shared/constants'

import { Button, CodeSandboxIcon, FileIcon, Separator } from 'components'

import { RendererIntelliSenseTab } from './IntelliSenses/renderer'
import { PreloadIntelliSenseTab } from './IntelliSenses/preload'
import { IpcsIntelliSenseTab } from './IntelliSenses/ipcs'
import { MainIntelliSenseTab } from './IntelliSenses/main'

import {
  TabButton,
  CodeContent,
  MenuControls,
  ExternalLink,
  MenuContainer,
  CodeContainer,
  CodeSandboxContainer,
} from './styles'

import { CodeBox } from 'components/Docs/MDXComponents/CodeBox'

const tabsData = [
  {
    code: codes.ipcs,
    IntelliSense: IpcsIntelliSenseTab,
  },
  {
    code: codes.main,
    IntelliSense: MainIntelliSenseTab,
  },
  {
    code: codes.preload,
    IntelliSense: PreloadIntelliSenseTab,
  },
  {
    code: codes.renderer,
    IntelliSense: RendererIntelliSenseTab,
  },
]

export function CodeEditorPresenterSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [tabsAlreadyVisited, setTabsAlreadyVisited] = useState<number[]>([])

  const Tab = tabsData[activeTab]
  const isActiveTabAlreadyVisited = tabsAlreadyVisited.includes(activeTab)

  const [typewrittenText, controls] = useWindupString(Tab.code.finalState, {
    pace: () => 1,

    onFinished() {
      if (!isActiveTabAlreadyVisited) {
        setTabsAlreadyVisited((prevState) => [...prevState, activeTab])
      }

      setTimeout(
        () => {
          containerRef.current?.scrollTo(0, 0)
        },
        isActiveTabAlreadyVisited ? 0 : 700
      )
    },
  })

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (isActiveTabAlreadyVisited || !container) {
      return controls.skip()
    }

    container.scrollTo(0, container.scrollHeight)
  }, [typewrittenText])

  const handleRemoveTabFromVisitedList = useCallback(() => {
    setTabsAlreadyVisited((prevState) =>
      prevState.filter((item) => item !== activeTab)
    )
  }, [activeTab])

  return (
    <CodeContainer>
      <CodeSandboxContainer>
        <ExternalLink
          title="See a simple example on CodeSandbox"
          href="https://codesandbox.io/s/simple-607b6h?file=/src/ipcs.ts"
        >
          <CodeSandboxIcon />
          Simple
        </ExternalLink>

        <ExternalLink
          title="See an advanced example on CodeSandbox"
          href="https://codesandbox.io/s/advanced-4qh0xb?file=/src/ipcs.ts"
        >
          <CodeSandboxIcon />
          Advanced
        </ExternalLink>
      </CodeSandboxContainer>

      <MenuContainer>
        <MenuControls>
          <Button
            variant={'primary'}
            onClick={controls.skip}
            disabled={controls.isFinished}
          >
            Skip
          </Button>

          <Button
            variant={'primary'}
            onClick={() => {
              handleRemoveTabFromVisitedList()
              controls.rewind()
            }}
            disabled={!controls.isFinished}
          >
            Replay
          </Button>
        </MenuControls>

        <ScrollableContainer vertical={false}>
          <ul>
            {tabs.fileNames.map((fileName, index) => (
              <React.Fragment key={fileName}>
                <TabButton
                  onClick={() => setActiveTab(index)}
                  active={Boolean(activeTab === index)}
                >
                  <FileIcon /> {fileName}
                </TabButton>

                {index !== tabsData.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </ul>
        </ScrollableContainer>
      </MenuContainer>

      <CodeContent ref={containerRef}>
        {Tab.IntelliSense && (
          <Tab.IntelliSense
            containerRef={containerRef}
            controller={controls}
            text={typewrittenText}
          />
        )}

        <CodeBox>
          {textFromChildren(<WindupChildren>{typewrittenText}</WindupChildren>)}
        </CodeBox>
      </CodeContent>
    </CodeContainer>
  )
}
