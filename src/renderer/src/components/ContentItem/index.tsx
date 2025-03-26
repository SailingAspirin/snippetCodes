import { Delete } from '@icon-park/react'
import dayjs from 'dayjs'
import { NavLink, useSubmit } from 'react-router-dom'
import { useContextMenu } from 'mantine-contextmenu'
interface props {
  item: {
    id: number
    title: string
    create_time: string
    category_id: number
  }
}
function ContentItem({ item }: props) {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  return (
    <NavLink
      to={`/config/category/contentList/${item.category_id}/content/${item.id}`}
      className="flex items-center justify-between"
      key={item.id}
      onContextMenu={showContextMenu([
        {
          key: 'remove',
          icon: <Delete theme="outline" size="18" strokeWidth={3} />,
          title: '删除片段',
          onClick: () => {
            submit({ action: 'remove', id: item.id }, { method: 'post' })
          },
        },
      ])}
    >
      <div className="truncate">{item.title}</div>
      <div>{dayjs(item.create_time).format('YYYY/MM/DD')}</div>
    </NavLink>
  )
}

export default ContentItem
