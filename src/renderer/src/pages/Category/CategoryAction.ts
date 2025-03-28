/*
 * @Author: Salaing
 * @Date: 2025-03-26 23:28:37
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-27 22:37:25
 * @Description: file content
 */
import { redirect } from 'react-router-dom'

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
      await window.api.sql(`delete from categories where id=@id`, 'del', {
        id: data.id,
      })
      await window.api.sql(
        `update contents set category_id=0 where category_id=@category_id`,
        'update',
        { category_id: data.id }
      )
      return redirect(`/config/category/contentList`)
    }
    case 'edit': {
      await window.api.sql(`update categories set name=@name where id=@id`, 'update', {
        id: data.id,
        name: data.name,
      })

      // return redirect(`/config/category/contentList/${data.id}`)
    }
  }
  return {}
}
