/*
 * @Author: Salaing
 * @Date: 2025-03-26 13:39:53
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-27 22:26:29
 * @Description: file content
 */
import { NavLink, useFetcher, useSubmit } from 'react-router-dom'
import { Delete, FolderClose } from '@icon-park/react'
import style from './style.module.scss'
import { useContextMenu } from 'mantine-contextmenu'
import { useStore } from '@renderer/store/useStore'

interface Props {
  category: CategoryType
}
function CategoryItem({ category }: Props) {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  const fetcher = useFetcher()
  const editCategoryId = useStore((state) => state.editCategoryId)
  const setEditCategoryId = useStore((state) => state.setEditCategoryId)

  return (
    <>
      {editCategoryId === category.id ? (
        <div className={style.input}>
          <input
            defaultValue={category.name}
            name="name"
            autoFocus
            onKeyDownCapture={(e) => {
              if (e.key === 'Enter') {
                // 检测是否按下回车键
                e.preventDefault() // 防止默认行为
                fetcher.submit(
                  { action: 'edit', id: category.id, name: e.currentTarget.value },
                  { method: 'put' }
                )
                setEditCategoryId(0) // 退出编辑模式
              }
            }}
          />
        </div>
      ) : (
        <NavLink
          onDoubleClick={() => {
            setEditCategoryId(category.id)
          }}
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
      )}
    </>
  )
}

export default CategoryItem
