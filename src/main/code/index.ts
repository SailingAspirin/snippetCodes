import { app } from 'electron'
import { createWindow } from './window'
import { registerIpc } from './ipc'
import { registerShortCut } from './shortCut'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
})
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

export default { createWindow }
