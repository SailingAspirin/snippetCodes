export default async () => {
  const categories = await window.api.sql('select * from categories order by id desc', 'findAll')

  return categories
}
