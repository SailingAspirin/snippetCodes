import { BrowserWindow } from 'electron'
import { createWindow } from './window'

let win = null as null | BrowserWindow
export const createConfigWindow = () => {
  if (!win) win = createWindow()
  win.on('closed', () => {
    win = null
  })
}
