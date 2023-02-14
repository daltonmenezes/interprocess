import { ipcMain } from 'electron'

import type {
  IPCRenderer,
  ProcessKeys,
  BrowserWindow,
  IPCFactoryProps,
} from '../types'

export function createMainInvokers<T extends IPCFactoryProps<T>>(props: T) {
  type Renderer = IPCRenderer<typeof props['renderer']>
  type RendererKeys = ProcessKeys<Renderer>

  const invokers = Object.keys(props.renderer!).reduce((acc, current) => {
    return {
      ...acc,

      [current as RendererKeys]: async (
        window: BrowserWindow,
        ...args: any[]
      ) => {
        return new Promise((resolve) => {
          const listener = async function (_: any, ...args: any[]) {
            const response = await args[0]

            resolve(response)
            ipcMain.removeListener(current as string, listener)
          }

          ipcMain.addListener(current as string, listener)

          window.webContents.send(current as string, ...args)
        })
      },
    }
  }, {}) as {
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
