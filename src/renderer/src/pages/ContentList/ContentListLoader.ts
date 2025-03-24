export default async ({ params }) => {
  const cid = params.cid
  if (cid) {
    const content = await window.api.sql(
      `select * from contents where category_id = ${params.cid}`,
      'findAll'
    )
    return content
  } else {
    const content = await window.api.sql(`select * from contents `, 'findAll')
    return content
  }
}
