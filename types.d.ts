type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'

type CategoryType = {
  id: number
  name: string
  create_time: string
}

type ContentType = {
  id: number
  category_id: number
  title: string
  content: string
  create_time: string
  update_time: string
}
