import { ipcMain, ipcRenderer } from 'electron'

import type {
  IPCMain,
  ProcessKeys,
  IPCRenderer,
  IPCFactoryProps,
} from '../types'

export function createRemoveHandlers<T extends IPCFactoryProps<T>>(props: T) {
  type Main = IPCMain<typeof props['main']>
  type MainKeys = ProcessKeys<Main>

  type Renderer = IPCRenderer<typeof props['renderer']>
  type RendererKeys = ProcessKeys<Renderer>

  type RemoveHandlers<R extends string> = {
    [Property in R]: () => void
  }

  const mainRemove = Object.keys(props.main!).reduce((acc, current) => {
    return {
      ...acc,

      [current as MainKeys]: () => {
        ipcMain.removeHandler(current as string)
      },
    }
  }, {}) as RemoveHandlers<MainKeys>

  const rendererRemove = Object.keys(props.renderer!).reduce((acc, current) => {
    return {
      ...acc,

      [current as RendererKeys]: () => {
        if (!props?.renderer?.[current as RendererKeys]) {
          return
        }

        ipcRenderer.removeListener(
          current as string,
          props.renderer[current as RendererKeys]!
        )
      },
    }
  }, {}) as RemoveHandlers<RendererKeys>

  return {
    mainRemove,
    rendererRemove,
  }
}
