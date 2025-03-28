import { Delete } from '@icon-park/react'
import dayjs from 'dayjs'
import { NavLink, useSubmit } from 'react-router-dom'
import { useContextMenu } from 'mantine-contextmenu'
import style from './style.module.scss'

interface props {
  item: ContentType
}
function ContentItem({ item }: props) {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  return (
    <NavLink
      to={`/config/category/contentList/${item.category_id}/content/${item.id}`}
      className={({ isActive }) => (isActive ? style.active : style.link)}
      key={item.id}
      onDragStart={(e) => {
        e.dataTransfer.setData('id', String(item.id))
        // 只允许移动
        e.dataTransfer.effectAllowed = 'move'
      }}
      onContextMenu={showContextMenu([
        {
          key: 'delete',
          icon: <Delete theme="outline" size="18" strokeWidth={3} />,
          title: '删除片段',
          onClick: () => {
            submit({ action: 'delete', id: item.id }, { method: 'delete' })
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
