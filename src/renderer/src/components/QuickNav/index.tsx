/*
 * @Author: Salaing
 * @Date: 2025-03-26 13:46:46
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 18:18:41
 * @Description: file content
 */
import { AllApplication } from '@icon-park/react'
import { NavLink } from 'react-router-dom'
import style from './style.module.scss'

function index() {
  return (
    <main className="border-b-2">
      <div className="px-2 mt-2 opacity-90 mb-1 ">快捷操作</div>
      <NavLink
        to={'/config/category/contentList'}
        end
        className={({ isActive }) => (isActive ? style.active : style.link)}
      >
        <div className="flex items-center gap-1">
          <AllApplication theme="outline" size="12" strokeWidth={3} />
          <div className="truncate ">所有片段</div>
        </div>
      </NavLink>
      <NavLink
        to={'/config/category/contentList/0'}
        className={({ isActive }) => (isActive ? style.active : style.link)}
      >
        <div className="flex items-center gap-1">
          <AllApplication theme="outline" size="12" strokeWidth={3} />
          <div className="truncate ">未分类</div>
        </div>
      </NavLink>
    </main>
  )
}

export default index
