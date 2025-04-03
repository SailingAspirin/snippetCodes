/*
 * @Author: Salaing
 * @Date: 2025-03-21 12:26:29
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-03 20:18:17
 * @Description: file content
 */
type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'

type CategoryType = {
  title: string
  id: number
  name: string
  create_time: string
  category_id: number

}

type ContentType = {
  id: number
  category_id: number
  title: string
  content: string
  create_time: string
  update_time: string
}

type WindowNameType = 'search' | 'config'

type ConfigDataType = {
  id: number
    shortCut: string
    databaseDirectory: string
}