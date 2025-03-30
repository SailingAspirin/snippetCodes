import { ipcMain, IpcMainEvent } from 'electron'
import { getByNameWindow, getWindowByEvent } from './windows'

ipcMain.on('openWindow', (_evnet: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).show()
})

ipcMain.on('closeWindow', (_evnet: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).hide()
})

// 鼠标穿透
ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
    const win = getWindowByEvent(event)
    if (win) {
      win.setIgnoreMouseEvents(ignore, options)
    }
  }
)