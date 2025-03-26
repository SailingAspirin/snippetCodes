/*
 * @Author: Salaing
 * @Date: 2025-03-21 11:40:50
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-21 12:46:11
 * @Description: file content
 */
import { IpcMainInvokeEvent } from 'electron/main'
import { ipcMain } from 'electron'
import * as query from './query'

ipcMain.handle(
  'sql',
  async (
    event: IpcMainInvokeEvent,
    sql: string,
    type: SqlActionType,
    params?: Record<string, any>
  ) => {
    return query[type](sql, params)
  }
)
