import { ipcMain } from 'electron'

import type {
  IPCMain,
  MainHandler,
  ProcessKeys,
  IPCFactoryProps,
} from '../types'

type MainHandle<
  MainKeys extends string,
  Main extends {
    [Property in MainKeys]: Main[Property]
  }
> = {
  [Property in MainKeys]: MainHandler<Property, Main[Property]>
}

export function createMainHandlers<T extends IPCFactoryProps<T>>(props: T) {
  type Main = IPCMain<typeof props['main']>
  type MainKeys = ProcessKeys<Main>

  const handlers = Object.keys(props.main!).reduce((acc, currentChannel) => {
    const ipcChannel = currentChannel as MainKeys

    return {
      ...acc,

      [ipcChannel]: async (
        listener?: MainHandler<typeof ipcChannel, Main[typeof ipcChannel]>
      ) => {
        const ProvidedHandler = props['main']![ipcChannel]

        if (!listener && ProvidedHandler) {
          return ipcMain.handle(ipcChannel, ProvidedHandler)
        }

        return ipcMain.handle(ipcChannel, (_, ...args) => {
          const handler = listener as any

          return handler(
            _,
            { [ipcChannel]: ProvidedHandler, data: args[0] },
            ...args
          )
        })
      },
    }
  }, {} as MainHandle<MainKeys, Main>)

  return handlers
}
