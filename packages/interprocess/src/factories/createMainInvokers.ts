import { ipcMain } from 'electron'

import type {
  IPCRenderer,
  ProcessKeys,
  BrowserWindow,
  IPCFactoryProps,
} from '../types'

import { registerAvailableRendererIpcsSyncHandler } from '../ipcs/main'
import { store } from '../store'

export function createMainInvokers<T extends IPCFactoryProps<T>>(props: T) {
  type Renderer = IPCRenderer<typeof props['renderer']>
  type RendererKeys = ProcessKeys<Renderer>

  registerAvailableRendererIpcsSyncHandler()

  const invokers = Object.keys(props.renderer!).reduce(
    (acc, currentChannel) => {
      const ipcChannel = currentChannel as RendererKeys

      return {
        ...acc,

        [ipcChannel]: async (window: BrowserWindow, ...args: any[]) => {
          return new Promise((resolve, reject) => {
            if (!store.main.availableRendererIpcChannels.has(ipcChannel)) {
              return reject(`No handler registered for '${ipcChannel}'`)
            }

            const listener = async function (_: any, ...args: any[]) {
              const response = await args[0]

              resolve(response)
              ipcMain.removeListener(ipcChannel, listener)
            }

            ipcMain.addListener(ipcChannel, listener)
            window.webContents.send(ipcChannel, ...args)
          })
        },
      }
    },
    {}
  ) as {
    [Property in RendererKeys]: (
      window: BrowserWindow,
      arg: Parameters<Renderer[Property]>[1] extends undefined
        ? void
        : Parameters<Renderer[Property]>[1],
      ...restOfArgs: any[]
    ) => ReturnType<Renderer[Property]>
  }

  return invokers
}
