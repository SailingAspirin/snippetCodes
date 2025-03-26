/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-21 12:04:41
 * @Description: file content
 */
import { ElectronAPI } from '@electron-toolkit/preload'

// declare global { ... } 是 TypeScript 中用于扩展全局命名空间的语法。通过这种方式，你可以在现有的全局命名空间中添加新的属性或类型声明，而不需要创建一个新的命名空间。
declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCut: (type: 'search', shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      openConfigWindow: () => void
      sql: <T>(
        sql: string,
        type: 'findAll' | 'findOne' | 'insert' | 'update' | 'del',
        params?: Record<string, any>
      ) => Promise<T>
    }
  }
}
