import React, { useEffect } from 'react'
import './category.scss'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Add, DatabaseSetting } from '@icon-park/react'

const Index = () => {
  const categories = useLoaderData() as CategoryType[]
  const navigate = useNavigate()

  useEffect(() => {
    if (categories.length > 0) {
      navigate(`/config/category/contentList/${categories[0].id}`)
    }
  }, [categories, navigate])

  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((item) => {
          return (
            <NavLink
              to={`/config/category/contentList/${item.id}`}
              key={item.id}
              // className={classNames({ active: item?.id === current?.id })}
              className={({ isActive }) => (isActive ? 'active' : '')}
              title={item.name}
            >
              {item.name}
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
