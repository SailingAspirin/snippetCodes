/*
 * @Author: Salaing
 * @Date: 2025-03-24 14:27:00
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-25 23:49:04
 * @Description: file content
 */
export default async ({ params }) => {
  const { id } = params
  const content = await window.api.sql(`select * from contents where id = ${id}`, 'findOne')
  const categories = await window.api.sql(`select * from categories order by id desc`, 'findAll')
  return {
    content,
    categories,
  }
}
