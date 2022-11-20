import { electronApp, is } from '@electron-toolkit/utils'
import { app, BrowserWindow } from 'electron'
import path from 'path'

import { registerIpcHandlers } from './ipc'

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    minHeight: 400,
    width: 700,
    height: 450,
    show: false,
    backgroundColor: '#191622',
    autoHideMenuBar: true,
    title: 'Interprocess',

    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false, // sandbox must be false
    },
  })

  registerIpcHandlers(mainWindow)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()

    if (is.dev) {
      mainWindow.webContents.openDevTools({ mode: 'detach' })
    }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  createMainWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
