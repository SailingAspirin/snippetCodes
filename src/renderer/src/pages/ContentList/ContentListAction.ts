import { redirect } from 'react-router-dom'

export default async ({ params, request }) => {
  const cid = params.cid || 1
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  switch (formData.get('action')) {
    case 'add': {
      const id = await window.api.sql(
        `insert into contents (title, content, category_id, created_at,updated_at)
         values ('未命名片段','',${cid}, datetime('now', 'localtime'),datetime('now', 'localtime'))`,
        'insert'
      )
      return redirect(`/config/category/contentList/${cid}/content/${id}`)
    }
    case 'delete': {
      const id = await window.api.sql(`delete from contents where id =@id`, 'del', { id: data.id })
      return id
    }
  }
  return {}
}
