import type { IPCFactoryProps } from '../types'

import { createApiToGlobalWindowExposer } from './createApiToGlobalWindowExposer'
import { createRendererInvokers } from './createRendererInvokers'
import { createRendererHandlers } from './createRendererHandlers'
import { createRemoveHandlers } from './createRemoveHandlers'
import { createMainInvokers } from './createMainInvokers'
import { createMainHandlers } from './createMainHandlers'

export function createInterprocess<T extends IPCFactoryProps<T>>(props: T) {
  const mainInvokers = createMainInvokers(props)
  const mainHandlers = createMainHandlers(props)

  const rendererInvokers = createRendererInvokers(props)
  const rendererHandlers = createRendererHandlers(props)

  const { mainRemove, rendererRemove } = createRemoveHandlers(props)

  const globalWindowExposedApi = createApiToGlobalWindowExposer(
    rendererHandlers,
    rendererInvokers,
    rendererRemove
  )

  return {
    ipcs: props,

    exposeApiToGlobalWindow: globalWindowExposedApi,

    ipcMain: {
      handle: mainHandlers,
      invoke: mainInvokers,
      remove: mainRemove,
    },

    ipcRenderer: {
      handle: rendererHandlers,
      invoke: rendererInvokers,
      remove: rendererRemove,
    },
  }
}
