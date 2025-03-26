/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:16:26
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-24 21:26:07
 * @Description: file contents
 */
import { BrowserWindow, shell, screen } from 'electron'
import { join } from 'path'
import url from 'node:url' // 引入url模块
import icon from '../../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'

export function createWindow(): BrowserWindow {
  const { width: winWidth } = screen.getPrimaryDisplay().workAreaSize
  const width = 350
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width,
    height: 500,
    x: winWidth - width,
    y: 0,
    show: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    title: 'Config',
    // titleBarStyle: 'hidden',
    // titleBarOverlay: {
    //   color: 'rgba(0,0,0,0)',
    //   height: 35,
    //   symbolColor: 'white',
    // },
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    if (is.dev) {
      mainWindow.webContents.openDevTools({ mode: 'undocked' })
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config/category/contentList')
  } else {
    // mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    mainWindow.loadURL(
      url.format({
        // 编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        // 协议
        protocol: 'file',
        slashes: true,
        hash: 'config/category/contentList',
      })
    )
  }
  return mainWindow
}
