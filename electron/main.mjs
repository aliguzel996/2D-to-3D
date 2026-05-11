import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import { app, BrowserWindow } from 'electron'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isDev = process.argv.includes('--dev')
const devServerUrl = 'http://127.0.0.1:5173/'
const devLogPath = path.join(__dirname, '..', 'electron-dev-nav.log')
const windowIconPath = isDev
  ? path.join(__dirname, '..', 'public', 'app-icon.png')
  : path.join(__dirname, '..', 'web app', 'app-icon.png')
let mainWindow = null

const writeDevLog = (message) => {
  if (!isDev) {
    return
  }

  try {
    fs.appendFileSync(devLogPath, `${new Date().toISOString()} ${message}\n`)
  } catch {
    // ignore logging failures in dev instrumentation
  }
}

const isDevModuleNavigation = (url) => {
  if (!url.startsWith(devServerUrl)) {
    return false
  }

  try {
    const parsed = new URL(url)
    return (
      parsed.pathname.startsWith('/src/') ||
      parsed.pathname.startsWith('/node_modules/') ||
      parsed.pathname.startsWith('/@')
    )
  } catch {
    return false
  }
}

const createWindow = async () => {
  if (isDev) {
    try {
      fs.writeFileSync(devLogPath, '')
    } catch {
      // ignore logging setup failures
    }
  }

  mainWindow = new BrowserWindow({
    title: '2D to 3D',
    width: 1480,
    height: 960,
    minWidth: 1080,
    minHeight: 720,
    backgroundColor: '#ffffff',
    autoHideMenuBar: true,
    icon: windowIconPath,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.on('will-navigate', (event, url) => {
    writeDevLog(`will-navigate ${url}`)
    if (isDev && isDevModuleNavigation(url)) {
      event.preventDefault()
      writeDevLog(`prevented-module-navigation ${url}`)
      void mainWindow?.loadURL(devServerUrl)
    }
  })

  mainWindow.webContents.on('did-fail-load', (_event, errorCode, errorDescription, validatedURL) => {
    writeDevLog(`did-fail-load ${errorCode} ${errorDescription} ${validatedURL}`)
    if (isDev && mainWindow && !mainWindow.isDestroyed()) {
      void mainWindow.loadURL(devServerUrl)
    }
  })

  mainWindow.webContents.on('did-start-navigation', (_event, url, isInPlace, isMainFrame) => {
    writeDevLog(`did-start-navigation main=${isMainFrame} inplace=${isInPlace} ${url}`)
  })

  mainWindow.webContents.on('did-frame-navigate', (_event, url, httpResponseCode, httpStatusText, isMainFrame) => {
    writeDevLog(`did-frame-navigate main=${isMainFrame} code=${httpResponseCode} ${httpStatusText} ${url}`)
  })

  mainWindow.webContents.on('dom-ready', () => {
    writeDevLog(`dom-ready ${mainWindow?.webContents.getURL() ?? ''}`)
  })

  mainWindow.webContents.on('did-finish-load', () => {
    writeDevLog(`did-finish-load ${mainWindow?.webContents.getURL() ?? ''}`)
  })

  if (isDev) {
    writeDevLog(`initial-load ${devServerUrl}`)
    await mainWindow.loadURL(devServerUrl)
    return
  }

  await mainWindow.loadFile(path.join(__dirname, '..', 'web app', 'index.html'))
}

app.whenReady().then(async () => {
  await createWindow()

  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
