/*
 * @Author: Salaing
 * @Date: 2025-03-21 10:30:28
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-08 23:45:01
 * @Description: file content
 */
import { db } from './connect'

export const findAll = (sql: string, params = {}) => {
  return db.prepare(sql).all(params)
}

export const findOne = (sql: string) => {
  return db.prepare(sql).get()
}

export const insert = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).run(params).lastInsertRowid
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const update = (sql: string, params: Record<string, any>) => {
  return db.prepare(sql).run(params).changes
}

export const del = (sql: string, params = {}) => {
  return db.prepare(sql).run(params).changes
}

export const config = () => {
  const res = findOne(`select * from config where id=1`) as { content: string }
  return JSON.parse(res.content)
}