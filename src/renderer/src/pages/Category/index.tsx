/*
 * @Author: Salaing
 * @Date: 2025-03-21 18:37:27
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 14:16:28
 * @Description: file content
 */
import React, { useEffect } from 'react'
import './category.scss'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Add, AllApplication, DatabaseSetting, FolderClose } from '@icon-park/react'
import classNames from 'classnames'
import QuickNav from '@renderer/components/QuickNav'
import CategoryItem from '@renderer/components/CategoryItem'

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
      <div className="categories ">
        <QuickNav />
        {categories.map((item) => {
          return <CategoryItem key={item.id} category={item} />
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
