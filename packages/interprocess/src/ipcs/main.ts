import { ipcMain } from 'electron'

import type { SyncAvailableIpcsOperation } from '../types'

import { isMainProcess } from '../utils/is'
import { IPC } from '../utils/ipcs'
import { store } from '../store'

let isAlreadyAvailableRendererIpcsSyncHandlerRegistered = false

interface SyncAvailableIpcsPayload {
  type: SyncAvailableIpcsOperation
  key: string
}

export function registerAvailableRendererIpcsSyncHandler() {
  if (isAlreadyAvailableRendererIpcsSyncHandlerRegistered || !isMainProcess())
    return

  ipcMain.handle(
    IPC.INTERNAL.SYNC_AVAILABLE_RENDERER_IPCS,
    (_, data: SyncAvailableIpcsPayload) => {
      if (data.type === 'add') {
        store.main.availableRendererIpcChannels.add(data.key)
      }

      if (data.type === 'remove') {
        store.main.availableRendererIpcChannels.delete(data.key)
      }
    }
  )

  isAlreadyAvailableRendererIpcsSyncHandlerRegistered = true
}
