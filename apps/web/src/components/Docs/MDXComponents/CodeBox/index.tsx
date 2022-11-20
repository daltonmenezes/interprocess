import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useState } from 'react'

import { queueTimeouts } from 'shared/utils'

import { CheckmarkIcon, ClipboardIcon, Spinner } from 'components'

import { Button } from './styles'
import { codeTheme } from 'styles'

const clipboardStateIcons = {
  copying: () => <Spinner />,
  copied: () => <CheckmarkIcon />,
  default: () => <ClipboardIcon />,
} as const

type clipboardStateKeys = keyof typeof clipboardStateIcons

export function CodeBox(props: any) {
  const [clipboardState, setClipboardState] =
    useState<clipboardStateKeys>('default')

  function copyToClipboard() {
    navigator.clipboard
      .writeText(props.children)
      .then(() => setClipboardState('copying'))
      .then(() =>
        queueTimeouts(
          {
            delay: 500,
            callback: () => setClipboardState('copied'),
          },

          {
            delay: 1000,
            callback: () => setClipboardState('default'),
          }
        )
      )
  }

  return (
    <>
      <SyntaxHighlighter
        language="ts"
        style={codeTheme}
        PreTag={({ children }) => <pre>{children}</pre>}
        {...props}
      />

      <Button
        onClick={copyToClipboard}
        title="Copy to clipboard"
        disabled={clipboardState !== 'default'}
      >
        {clipboardStateIcons[clipboardState]()}
      </Button>
    </>
  )
}
