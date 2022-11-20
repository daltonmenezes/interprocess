import { ipcMain } from 'shared/ipcs'

const { handle, invoke, remove } = ipcMain

export function registerIpcHandlers(window: Electron.BrowserWindow) {
  // execute the getPing registration with another handler and use the previous handler lazily if needed to perform some other tasks
  handle.getPing(async (_, { getPing, data }) => {
    const response = await getPing(_, data)

    console.log(response)

    // invoke the getPong from renderer process
    await invoke.getPong(window, 'pong')

    // remove the getPing IPC handler
    remove.getPing()

    return 'The getPong ipc was removed'
  })

  // A simple way to use the registered handler is:
  //
  //    handle.getPing()
  //
  //  it is useful when you don't need to pass any special data from main to the handler
}
