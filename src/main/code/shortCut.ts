/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:40:12
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-03 22:48:06
 * @Description: file content
 */
import { app, BrowserWindow, dialog, globalShortcut } from 'electron'

export const registerShortCut = (win: BrowserWindow) => {
  app.whenReady().then(() => {
    //  注册快捷键
    const ret = globalShortcut.register('CommandOrControl+Shift+;', () => {
      win.show()
      console.log('CommandOrControl+Shift+I is pressed')
    })
    if (!ret) {
      dialog.showErrorBox('无法注册快捷键', '请检查你的快捷键是否被占用')
    }
    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('CommandOrControl+Shift+;'))
  })
  app.on('will-quit', () => {
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
