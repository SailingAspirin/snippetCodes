/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:16:26
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-30 18:42:29
 * @Description: file contents
 */
import { BrowserWindow, shell, screen, BrowserWindowConstructorOptions } from 'electron'
import { join } from 'path'
import icon from '../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'
import url from 'node:url'

export interface OptionsType extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
  initShow?: boolean
}
export function createWindow(options: OptionsType): BrowserWindow {
  // Create the browser window.
  //   const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow(
    Object.assign(
      {
        width: 200,
        height: 400,
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
      },
      options
    )
  )

  // Create a new BrowserWindow for DevTools
  if (is.dev && options.openDevTools) win.webContents.openDevTools()

  win.on('ready-to-show', () => {
    win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
  } else {
    //  win.loadFile(join(__dirname, '../renderer/index.html'))
    win.loadURL(
      url.format({
        // 编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        // 协议
        protocol: 'file',
        slashes: true,
        hash: options.hash?.substring(1),
      })
    )
  }
  return win
}
