export const codes = {
  ipcs: {
    finalState: `import { createInterprocess } from 'interprocess'

export const { exposeApiToGlobalWindow, ipcMain, ipcRenderer } =
  createInterprocess({
    main: {
      async myIpcHandler(_, data: string) {
        // ... do something with the data when this handler is invoked by the renderer process
        return data.toUpperCase()
      },
    },

    renderer: {
      async myAnotherIpcHandler(_, data: string) {
        // ... do something with the data when this handler is invoked by the main process
        return data.toLowerCase()
      },
    },
  })
  `,

    firstCheckToShowIntelliSense: `import { createInterprocess } from 'interprocess'

export const { exposeApiToGlobalWindow, ipcMain, ipcRenderer } =
  createInterprocess({
    `,

    secondCheckToShowIntelliSense: `import { createInterprocess } from 'interprocess'

export const { exposeApiToGlobalWindow, ipcMain, ipcRenderer } =
  createInterprocess({
    main: {
      async myIpcHandler(_, data: string) {
        // ... do something with the data when this handler is invoked by the renderer process
        return data.toUpperCase()
      },
    },

    `,
  },

  main: {
    finalState: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { handle, invoke } = ipcMain

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // sandbox must be false
    },
  })

  handle.myIpcHandler(async (_, { myIpcHandler, data }) => {
    const result = await myIpcHandler(_, data)

    return result
  })
  // That could be handle.myIpcHandler()
  // if you don't need to do anything else
  // with the result here and it will call the handler directly

  mainWindow.webContents.on('dom-ready', () => {
    // invoke the myAnotherIpcHandler from renderer process
    invoke.myAnotherIpcHandler(mainWindow, 'LOWER-CASE IT FOR ME')
  })
})
    `,

    firstCheckToShowIntelliSense: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { `,

    secondCheckToShowIntelliSense: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { handle, `,

    thirdCheckToShowIntelliSense: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { handle, invoke } = ipcMain

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // sandbox must be false
    },
  })

  handle.`,

    fourthCheckToShowIntelliSense: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { handle, invoke } = ipcMain

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // sandbox must be false
    },
  })

  handle.myIpcHandler(async (_, { `,

    fifthCheckToShowIntelliSense: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { handle, invoke } = ipcMain

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // sandbox must be false
    },
  })

  handle.myIpcHandler(async (_, { myIpcHandler, `,

    sixthCheckToShowIntelliSense: `// ... some imports
import { ipcMain } from 'shared/ipcs'

const { handle, invoke } = ipcMain

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // sandbox must be false
    },
  })

  handle.myIpcHandler(async (_, { myIpcHandler, data }) => {
    const result = await myIpcHandler(_, data)

    return result
  })
  // That could be handle.myIpcHandler()
  // if you don't need to do anything else
  // with the result here and it will call the handler directly

  mainWindow.webContents.on('dom-ready', () => {
    // invoke the myAnotherIpcHandler from renderer process
    invoke.`,
  },

  preload: {
    finalState: `import { exposeApiToGlobalWindow, ipcRenderer } from './ipcs'

const { handle } = ipcRenderer

// Call exposeApiToGlobalWindow with no arguments will expose only invokers to the api
// If you want to expose all options, you can pass { exposeAll: true } object argument
const { key, api } = exposeApiToGlobalWindow()

// execute the myAnotherIpcHandler registration
handle.myAnotherIpcHandler()

declare global {
  interface Window {
    [key]: typeof api
  }
}
 `,
    firstCheckToShowIntelliSense: `import { exposeApiToGlobalWindow, ipcRenderer } from './ipcs'

const { handle } = ipcRenderer

// Call exposeApiToGlobalWindow with no arguments will expose only invokers to the api
// If you want to expose all options, you can pass { exposeAll: true } object argument
const { key, api } = exposeApiToGlobalWindow()

// execute the myAnotherIpcHandler registration
handle.`,
  },

  renderer: {
    finalState: `const { invoke } = window.api

// invoke the myIpcHandler from main process
invoke.myIpcHandler('upper-case me, please!')

`,
    firstCheckToShowIntelliSense: `const { invoke } = window.api

// invoke the myIpcHandler from main process
invoke.`,
  },
}
