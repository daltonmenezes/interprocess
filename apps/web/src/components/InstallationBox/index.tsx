import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Fragment, useState } from 'react'

import { queueTimeouts } from 'shared/utils'
import { commands } from 'shared/constants'

import { Separator, CheckmarkIcon, ClipboardIcon, Spinner } from 'components'

import { Button, PackageButton, PackageManagerList, ShellBox } from './styles'
import { usePackageManagerSelection } from 'hooks'
import { codeTheme } from 'styles'

const clipboardStateIcons = {
  copying: () => <Spinner />,
  copied: () => <CheckmarkIcon />,
  default: () => <ClipboardIcon />,
} as const

type ClipboardStateKeys = keyof typeof clipboardStateIcons
type PackageManagerOptions = keyof typeof commands

const defaultActivePackageManager = 'yarn'

export function InstallationBox() {
  const [clipboardState, setClipboardState] =
    useState<ClipboardStateKeys>('default')

  const { activePackageManager, updateActivePackageManager } =
    usePackageManagerSelection<PackageManagerOptions>(
      defaultActivePackageManager
    )

  const installCommand = commands[activePackageManager]

  const availablePackagesManagers = Object.keys(
    commands
  ) as PackageManagerOptions[]

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

  return (
    <>
      <PackageManagerList>
        {availablePackagesManagers.map(
          (packageManagerName, index, packageManagers) => {
            const isLastItem = index === packageManagers.length - 1

            return (
              <Fragment key={packageManagerName}>
                <li>
                  <PackageButton
                    active={packageManagerName === activePackageManager}
                    onClick={() =>
                      updateActivePackageManager(packageManagerName)
                    }
                  >
                    {packageManagerName}
                  </PackageButton>
                </li>

                {!isLastItem && <Separator aria-hidden />}
              </Fragment>
            )
          }
        )}
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
