/*
 * @Author: Salaing
 * @Date: 2025-03-21 18:37:27
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-24 21:13:19
 * @Description: file content
 */
import React, { useEffect } from 'react'
import './category.scss'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Add, AllApplication, DatabaseSetting, FolderClose } from '@icon-park/react'

const Index = () => {
  const categories = useLoaderData() as CategoryType[]
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (categories.length > 0) {
  //     navigate(`/config/category/contentList/${categories[0].id}`)
  //   }
  // }, [categories, navigate])

  return (
    <main className="category-page">
      <div className="categories">
        <div className="px-2 mt-2 opacity-90 mb-1">快捷操作</div>
        <NavLink to={'/config/category/contentList'} end className={'font-bold'}>
          <div className="flex items-center gap-1">
            <AllApplication theme="outline" size="12" fill="#333" strokeWidth={3} />
            <div className="truncate ">所有片段</div>
          </div>
        </NavLink>
        {categories.map((item) => {
          return (
            <NavLink
              to={`/config/category/contentList/${item.id}`}
              key={item.id}
              // className={classNames({ active: item?.id === current?.id })}
              className={({ isActive }) => (isActive ? 'active' : '')}
              title={item.name}
            >
              <div className="flex items-center gap-2">
                <FolderClose theme="outline" size="12" fill="#333" strokeWidth={3} />
                <div className={'truncate'}>{item.name}</div>
              </div>
            </NavLink>
          )
        })}
      </div>
      <div className="nav">
        <Add theme="outline" size="20" fill="#333" strokeWidth={4} />
        <DatabaseSetting theme="outline" size="20" fill="#333" strokeWidth={4} />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}

export default Index
