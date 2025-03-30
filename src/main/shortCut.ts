/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:40:12
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-30 20:32:03
 * @Description: file content
 */
import { app, BrowserWindow, dialog, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getByNameWindow } from './windows'

const config = {
  search: '',
  type: '',
}

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
  config.search = shortCut
  switch (type) {
    case 'search':
      return registerSearchShortCut(getByNameWindow('search'), shortCut)
    default:
      return false // 确保所有路径都有返回值
  }
})
//  注册搜索快捷键
const registerSearchShortCut = (win: BrowserWindow, shortCut: string) => {
  const ret = globalShortcut.register(shortCut, () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    win.isVisible() ? win.hide() : win.show()
  })
  return ret
}
app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
