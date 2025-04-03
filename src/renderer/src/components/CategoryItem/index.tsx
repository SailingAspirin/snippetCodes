/*
 * @Author: Salaing
 * @Date: 2025-03-26 13:39:53
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-28 20:19:41
 * @Description: 类别
 */
import { NavLink, useFetcher } from 'react-router-dom'
import { FolderClose } from '@icon-park/react'
import style from './style.module.scss'
import { useStore } from '@renderer/store/useStore'
import useCategory from '@renderer/hooks/useCategory'

interface Props {
  category: CategoryType
}
function CategoryItem({ category }: Props) {
  const fetcher = useFetcher()
  const { contextMenu, dragHandle } = useCategory(category)
  const editCategoryId = useStore((state) => state.editCategoryId)
  const setEditCategoryId = useStore((state) => state.setEditCategoryId)

  return (
    <>
      {editCategoryId === category.id ? (
        <div className={style.input}>
          <input
            defaultValue={category.name}
            name="name"
            // autoFocus
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
          onContextMenu={contextMenu()}
          {...dragHandle}
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
