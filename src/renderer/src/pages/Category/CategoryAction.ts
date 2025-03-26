import { redirect } from 'react-router-dom'

/*
 * @Author: Salaing
 * @Date: 2025-03-26 23:28:37
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-27 00:52:03
 * @Description: file content
 */
export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  switch (data.action) {
    case 'add': {
      const cid = await window.api.sql(
        `insert into categories (name,created_at) values ('未命名',datetime('now', 'localtime'))`,
        'insert'
      )
      return redirect(`/config/category/contentList/${cid}`)
    }
    case 'delete': {
      const deleteSql = await window.api.sql(`delete from categories where id=@id`, 'del', {
        id: data.id,
      })
      return deleteSql
    }
  }
  return {}
}
