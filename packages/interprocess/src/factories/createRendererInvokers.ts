import { ipcRenderer } from 'electron'

import type { IPCFactoryProps, IPCMain, ProcessKeys } from '../types'

export function createRendererInvokers<T extends IPCFactoryProps<T>>(props: T) {
  type Main = IPCMain<typeof props['main']>
  type MainKeys = ProcessKeys<Main>

  const invokers = Object.keys(props.main!).reduce((acc, current) => {
    return {
      ...acc,

      [current as MainKeys]: async (...args: any[]) => {
        return ipcRenderer.invoke(current as string, ...args)
      },
    }
  }, {}) as {
    [Property in MainKeys]: (
      arg: Parameters<Main[Property]>[1],
      ...restOfArgs: any[]
    ) => ReturnType<Main[Property]>
  }

  return invokers
}
