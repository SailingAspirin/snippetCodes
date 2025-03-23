/*
 * @Author: Salaing
 * @Date: 2025-03-21 18:37:27
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-23 11:42:47
 * @Description: file content
 */
import { useEffect } from 'react'
import './contentList.css'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'

const Index = () => {
  const content = useLoaderData() as ContentType[]
  const navigate = useNavigate()

  useEffect(() => {
    if (content.length > 0) {
      navigate(`/config/category/contentList/${content[0].category_id}/content/${content[0].id}`)
    }
  }, [content, navigate])

  return (
    <main className="contentList-page">
      <div className="list">
        {content.map((item) => (
          <NavLink
            to={`/config/category/contentList/${item.category_id}/content/${item.id}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
            key={item.id}
          >
            <div className="truncate">{item.title}</div>
            <div>{item.create_time}</div>
          </NavLink>
        ))}
      </div>
      <div className="contentList">
        <Outlet />
      </div>
    </main>
  )
}

export default Index
