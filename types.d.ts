type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'

type CategoryType = {
  title: string
  id: number
  name: string
  create_time: string
  category_id: number

}

type ContentType = {
  id: number
  category_id: number
  title: string
  content: string
  create_time: string
  update_time: string
}

type WindowNameType = 'search' | 'config'