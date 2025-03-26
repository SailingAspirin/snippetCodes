export default async ({ params, request }) => {
  const cid = params.cid
  const url = new URL(request.url)
  const searchWord = url.searchParams.get('searchWord')

  let sql = `select * from contents `
  if (searchWord) {
    sql += ` where title like @searchWord order by id desc`
    const content = await window.api.sql(sql, 'findAll', { searchWord: `%${searchWord}%` })
    return content
  }
  if (cid !== undefined) {
    sql += `where category_id=${cid}`
  }
  sql += ' order by id desc'

  const result = await window.api.sql(sql, 'findAll')

  return result
}
