import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useState } from 'react'

import { queueTimeouts } from 'shared/utils'
import { commands } from 'shared/constants'

import { Separator, CheckmarkIcon, ClipboardIcon, Spinner } from 'components'

import { Button, PackageButton, PackageManagerList, ShellBox } from './styles'
import { codeTheme } from 'styles'

const clipboardStateIcons = {
  copying: () => <Spinner />,
  copied: () => <CheckmarkIcon />,
  default: () => <ClipboardIcon />,
} as const

type ClipboardStateKeys = keyof typeof clipboardStateIcons
type PackageManagerOptions = keyof typeof commands

export function InstallationBox() {
  const [clipboardState, setClipboardState] =
    useState<ClipboardStateKeys>('default')

  const [packageManager, setPackageManager] =
    useState<PackageManagerOptions>('yarn')

  const installCommand = commands[packageManager]

  function copyToClipboard() {
    navigator.clipboard
      .writeText(installCommand)
      .then(() => setClipboardState('copying'))
      .then(() =>
        queueTimeouts(
          {
            delay: 1000,
            callback: () => setClipboardState('copied'),
          },
          {
            delay: 1000,
            callback: () => setClipboardState('default'),
          }
        )
      )
  }

  function handlePackageManagerSelection(
    packageManager: PackageManagerOptions
  ) {
    setPackageManager(() => packageManager)
  }

  return (
    <>
      <PackageManagerList>
        <li>
          <PackageButton
            onClick={() => handlePackageManagerSelection('npm')}
            active={packageManager === 'npm'}
          >
            npm
          </PackageButton>
        </li>

        <Separator />

        <li>
          <PackageButton
            onClick={() => handlePackageManagerSelection('yarn')}
            active={packageManager === 'yarn'}
          >
            yarn
          </PackageButton>
        </li>
      </PackageManagerList>

      <ShellBox>
        <SyntaxHighlighter language="bash" style={codeTheme}>
          {installCommand}
        </SyntaxHighlighter>

        <Button
          onClick={copyToClipboard}
          title="Copy to clipboard"
          disabled={clipboardState !== 'default'}
        >
          {clipboardStateIcons[clipboardState]()}
        </Button>
      </ShellBox>
    </>
  )
}
