import { ipcMain } from 'shared/ipcs'

export function registerIpcHandlers(window: Electron.BrowserWindow) {
  ipcMain.handle.getPing(async (_, { getPing, data }) => {
    const response = await getPing(_, data)

    console.log(response)

    await ipcMain.invoke.getPong(window, 'pong')
    ipcMain.remove.getPing()

    return 'The getPong ipc was removed'
  })

  // A simple way to use the registered handler is:
  //
  //    ipcMain.handle.getPing()
  //
  //  it is useful when you don't need to pass any special data from main to the handler
}
