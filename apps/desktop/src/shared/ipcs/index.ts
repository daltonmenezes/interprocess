import { combineIpcs } from 'interprocess'

import { getPongIpcSlice } from './renderer'
import { getPingIpcSlice } from './main'

export const { ipcMain, ipcRenderer, exposeApiToGlobalWindow } = combineIpcs(
  getPongIpcSlice,
  getPingIpcSlice
)
