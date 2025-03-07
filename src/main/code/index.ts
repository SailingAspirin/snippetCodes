/*
 * @Author: Salaing
 * @Date: 2025-03-03 22:26:23
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-07 16:00:36
 * @Description: 当应用准备就绪时，创建主窗口并注册IPC通信、快捷键和鼠标事件忽略功能。
 */
import { app } from 'electron'
import { createWindow } from './window'
import { registerIpc } from './ipc'
import { registerShortCut } from './shortCut'
import ignoreMouseEvents from './ignoreMouseEvents'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
  ignoreMouseEvents(win)
})
// Quit when all windows are closed, except on macOS. There, it's common
app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
  app.quit()
})

export default { createWindow }
