/*
 * @Author: Salaing
 * @Date: 2025-03-26 13:39:53
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 18:04:53
 * @Description: file content
 */
import { NavLink, useSubmit } from 'react-router-dom'
import { Delete, FolderClose } from '@icon-park/react'
import style from './style.module.scss'
import { useContextMenu } from 'mantine-contextmenu'

interface Props {
  category: CategoryType
}
function CategoryItem({ category }: Props) {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()

  return (
    <NavLink
      to={`/config/category/contentList/${category.id}`}
      key={category.id}
      className={({ isActive }) => (isActive ? style.active : style.link)}
      title={category.name}
      onContextMenu={showContextMenu([
        {
          key: 'delete',
          icon: <Delete theme="outline" size="18" strokeWidth={3} />,
          title: '删除分类',
          onClick: () => {
            submit({ action: 'delete', id: category.id }, { method: 'delete' })
          },
        },
      ])}
    >
      <div className="flex items-center gap-1">
        <FolderClose theme="outline" size="12" strokeWidth={3} />
        <div className={'truncate'}>{category.name}</div>
      </div>
    </NavLink>
  )
}

export default CategoryItem
