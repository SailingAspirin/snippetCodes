export default async ({ params }) => {
  const { id } = params
  return window.api.sql(`select * from contents where id = ${id}`, 'findOne')
}
