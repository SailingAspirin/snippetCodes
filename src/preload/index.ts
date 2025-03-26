import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer 转发到客户端
const api = {
  hideWindow: () => {
    ipcRenderer.send('hideWindow')
  },
  shortCut: (type: string, shortCut: string) => {
    return ipcRenderer.invoke('shortCut', type, shortCut)
  },
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  openConfigWindow: () => {
    ipcRenderer.send('openConfigWindow')
  },
  sql: (sql: string, type: SqlActionType, params = {}) => {
    return ipcRenderer.invoke('sql', sql, type, params)
  },
}

// 根据上下文隔离状态（contextBridge），选择合适的方式将 Electron API 和自定义 API 暴露给渲染进程。
// 如果启用了上下文隔离，则使用 contextBridge 安全地暴露 API。
// 否则，直接将 API 绑定到 window 对象上。
if (process.contextIsolated) {
  try {
    // 使用 contextBridge 将 electronAPI 暴露给渲染进程。
    contextBridge.exposeInMainWorld('electron', electronAPI)
    // 使用 contextBridge 将自定义的 api 暴露给渲染进程。
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // 如果未启用上下文隔离，直接将 electronAPI 绑定到 window 对象。
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // 如果未启用上下文隔离，直接将自定义的 api 绑定到 window 对象。
  // @ts-ignore (define in dts)
  window.api = api
}
