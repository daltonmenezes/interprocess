import { ipcMain, ipcRenderer } from 'electron'

import type {
  IPCMain,
  ProcessKeys,
  IPCRenderer,
  IPCFactoryProps,
} from '../types'

import { IPC } from '../utils/ipcs'

export function createRemoveHandlers<T extends IPCFactoryProps<T>>(props: T) {
  type Main = IPCMain<typeof props['main']>
  type MainKeys = ProcessKeys<Main>

  type Renderer = IPCRenderer<typeof props['renderer']>
  type RendererKeys = ProcessKeys<Renderer>

  type RemoveHandlers<R extends string> = {
    [Property in R]: () => void
  }

  const mainRemove = Object.keys(props.main!).reduce((acc, currentChannel) => {
    const ipcChannel = currentChannel as MainKeys

    return {
      ...acc,

      [ipcChannel]: () => {
        ipcMain.removeHandler(ipcChannel)
      },
    }
  }, {}) as RemoveHandlers<MainKeys>

  const rendererRemove = Object.keys(props.renderer!).reduce(
    (acc, currentChannel) => {
      const ipcChannel = currentChannel as RendererKeys

      return {
        ...acc,

        [ipcChannel]: () => {
          if (!props?.renderer?.[ipcChannel]) {
            return
          }

          ipcRenderer.removeListener(ipcChannel, props.renderer[ipcChannel]!)

          delete props?.renderer?.[ipcChannel]

          ipcRenderer.invoke(IPC.INTERNAL.SYNC_AVAILABLE_RENDERER_IPCS, {
            type: 'remove',
            key: ipcChannel,
          })
        },
      }
    },
    {}
  ) as RemoveHandlers<RendererKeys>

  return {
    mainRemove,
    rendererRemove,
  }
}
