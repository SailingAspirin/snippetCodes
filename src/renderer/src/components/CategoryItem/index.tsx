/*
 * @Author: Salaing
 * @Date: 2025-03-26 13:39:53
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 13:40:07
 * @Description: file content
 */
import { NavLink } from 'react-router-dom'
import { FolderClose } from '@icon-park/react'
interface Props {
  category: CategoryType
}
function index({ category }: Props) {
  return (
    <NavLink
      to={`/config/category/contentList/${category.id}`}
      key={category.id}
      className={({ isActive }) => (isActive ? 'active' : '')}
      title={category.name}
    >
      <div className="flex items-center gap-2">
        <FolderClose theme="outline" size="12" fill="#333" strokeWidth={3} />
        <div className={'truncate'}>{category.name}</div>
      </div>
    </NavLink>
  )
}

export default index
