export default async ({ request }) => {
  const data = await request.formData()
  const title = data.get('title')
  const content = data.get('content')
  const id = data.get('id')
  const category_id = data.get('category_id')
  // 使用参数化查询，避免 SQL 注入
  const query = {
    sql: 'UPDATE contents SET title = @title, content = @content, category_id=@category_id  WHERE id = @id',
    params: { title, content, category_id, id },
  }
  try {
    const res = await window.api.sql(query.sql, 'update', query.params) // 确保传递两个参数
    return res
  } catch (error) {
    console.error('SQL 执行失败:', error)
    throw error // 抛出错误以便调用方处理
  }
}
