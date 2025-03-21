/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:16:26
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-20 20:15:08
 * @Description: file contents
 */
import { BrowserWindow, shell, screen } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow({
    width: 200,
    height: 400,
    x: width - 500,
    y: 0,
    // center: true,
    show: false,
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  // Create a new BrowserWindow for DevTools
  const devToolsWindow = new BrowserWindow({
    width: 400,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  // Attach DevTools to the new window
  win.webContents.setDevToolsWebContents(devToolsWindow.webContents)
  win.webContents.openDevTools({ mode: 'detach' })

  win.on('ready-to-show', () => {
    win.show()
    devToolsWindow.show() // 确保开发者工具窗口也显示
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return win
}
