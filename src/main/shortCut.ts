/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:40:12
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-08 23:40:55
 * @Description: file content
 */
import { app,  dialog, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getByNameWindow } from './windows'
import { config ,findOne} from './db/query'



ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, shortCut: string) => {
  return registerSearchShortCut(shortCut)
})

//  注册搜索快捷键
const registerSearchShortCut = (shortCut: string) => {

  globalShortcut.unregisterAll()
  if (shortCut && globalShortcut.isRegistered(shortCut)) {
    dialog.showErrorBox('温馨提示', '快捷键注册失败，请检查快捷键是否已被占用')
    return false
  }
  const win = getByNameWindow('search')
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

export const registerAppGlobShortcut = () => {
  const configData = config() as { shortCut: string }
  if (configData.shortCut) {
    registerSearchShortCut(configData.shortCut)
  }
}