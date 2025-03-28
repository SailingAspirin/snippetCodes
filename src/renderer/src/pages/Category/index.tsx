/*
 * @Author: Salaing
 * @Date: 2025-03-21 18:37:27
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 23:33:27
 * @Description: 片段首页
 */
import './category.scss'
import {  Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import QuickNav from '@renderer/components/QuickNav'
import CategoryItem from '@renderer/components/CategoryItem'
import FooterMenu from '@renderer/components/FooterMenu'

const Index = () => {
  const categories = useLoaderData() as CategoryType[]


  return (
    <main className="category-page">
      <div className="categories ">
        <QuickNav />
        {categories.map((item) => {
          return <CategoryItem key={item.id} category={item} />
        })}
      </div>
      <div className="nav">
        <FooterMenu />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}

export default Index
