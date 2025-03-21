import React from 'react'
import './category.scss'
import { Outlet } from 'react-router-dom'
import { Add, DatabaseSetting } from '@icon-park/react'

const Index = () => {
  return (
    <main className="category-page">
      <div className="categories">categories</div>
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
