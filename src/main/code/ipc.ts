import { BrowserWindow, ipcMain } from 'electron'

export const registerIpc = (win: BrowserWindow) => {
  //   ipcMain.on('showWindow', () => {
  //     // const win = BrowserWindow.fromWebContents(event.sender)
  //     win?.show()
  //   })
  ipcMain.on('hideWindow', () => {
    win?.hide()
  })
}
