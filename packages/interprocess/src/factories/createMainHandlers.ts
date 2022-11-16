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

  const handlers = Object.keys(props.main!).reduce((acc, current) => {
    const key = current as MainKeys

    return {
      ...acc,

      [key]: async (listener?: MainHandler<typeof key, Main[typeof key]>) => {
        const ProvidedHandler = props['main']![key]

        if (!listener && ProvidedHandler) {
          return ipcMain.handle(key as string, ProvidedHandler)
        }

        return ipcMain.handle(key as string, (_, ...args) => {
          const handler = listener as any

          return handler(_, { [key]: ProvidedHandler, data: args[0] }, ...args)
        })
      },
    }
  }, {} as MainHandle<MainKeys, Main>)

  return handlers
}
