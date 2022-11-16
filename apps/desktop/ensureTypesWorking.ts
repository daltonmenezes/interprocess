import { combineIpcs, createInterprocess, createIpcSlice } from 'interprocess'

////////////////////////////////////
//////////      ipcs      //////////
////////////////////////////////////

const getPongSlice = createIpcSlice({
  main: {
    async getPong(_, data: 'pong') {
      return `from renderer: ping ${data} on main process`
    },
  },
})

const getPingSlice = createIpcSlice({
  renderer: {
    async getPing(_, data: 'ping') {
      return `from main: ${data} pong on renderer process` as const
    },
  },
})

const getHelloSlice = createIpcSlice({
  main: {
    async getHello(_, data: 'pong') {
      return `${data}`
    },
  },
})

// const { ipcMain, exposeApiToGlobalWindow } = combineIpcs(
//   getPongSlice,
//   getPingSlice,
//   getHelloSlice
// )

const ipcs = createInterprocess({
  main: {
    async getPing(_, data: 'ping') {
      return `from renderer: ${data} on main process`
    },
  },

  renderer: {
    async getPong(_, data: 'pong') {
      return `from main: ${data} on renderer process`
    },
  },
})

export const { ipcMain, ipcRenderer, exposeApiToGlobalWindow } = ipcs

////////////////////////////////////
//////////    main.ts     //////////
////////////////////////////////////

function registerIPCHandlers(window: Electron.BrowserWindow) {
  ipcMain.handle.getPing(async (_, { getPing, data }) => {
    const result = await getPing(_, data)

    console.log(result)

    ipcMain.invoke.getPong(window, 'pong')
    ipcMain.remove.getPing()

    return result
  })
}

////////////////////////////////////
//////////   preload.ts   //////////
////////////////////////////////////

declare global {
  interface Window {
    [key]: typeof api
  }
}

const { key, api } = exposeApiToGlobalWindow({
  apiKey: 'ensureApi',
  exposeAll: true,

  append: {
    world: 'world',
    sayHello(data: 'hello world!') {
      console.log(data)
    },
  } as const,
})

////////////////////////////////////
//////////   renderer.ts  //////////
////////////////////////////////////

const { invoke, handle, remove, sayHello, world } = window.ensureApi

invoke.getPing('ping')

sayHello(`hello ${world}!`)

handle.getPong(async (_, { getPong, data }) => {
  const result = await getPong(_, data)

  console.log(result)

  remove.getPong()

  return result
})
