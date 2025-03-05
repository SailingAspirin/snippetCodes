/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:16:26
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-05 22:54:08
 * @Description: file contents
 */
import { BrowserWindow, shell } from 'electron'
import { join } from 'path'
import url from 'node:url' // 引入url模块
import icon from '../../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    show: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  //   mainWindow.webContents.openDevTools()
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
  } else {
    // mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    mainWindow.loadURL(
      url.format({
        // 编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        // 协议
        protocol: 'file',
        slashes: true,
        hash: 'config',
      })
    )
  }
  return mainWindow
}
