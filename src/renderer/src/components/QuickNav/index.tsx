/*
 * @Author: Salaing
 * @Date: 2025-03-26 13:46:46
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 14:14:45
 * @Description: file content
 */
import { AllApplication } from '@icon-park/react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <>
      <div className="px-2 mt-2 opacity-90 mb-1">快捷操作</div>
      <NavLink to={'/config/category/contentList'} end className={'font-bold'}>
        <div className="flex items-center gap-1">
          <AllApplication theme="outline" size="12" fill="#333" strokeWidth={3} />
          <div className="truncate ">所有片段</div>
        </div>
      </NavLink>
      <NavLink
        to={'/config/category/contentList/0'}
        className={({ isActive }) => classNames('font-bold', { active: isActive })}
      >
        <div className="flex items-center gap-1">
          <AllApplication theme="outline" size="12" fill="#333" strokeWidth={3} />
          <div className="truncate ">未分类</div>
        </div>
      </NavLink>
    </>
  )
}

export default index
