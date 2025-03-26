/*
 * @Author: Salaing
 * @Date: 2025-03-21 18:37:27
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 14:30:49
 * @Description: file content
 */
import { useEffect, useRef } from 'react'
import './contentList.css'
import { Outlet, useLoaderData, useLocation, useSubmit, Form } from 'react-router-dom'

import ContentSearch from '@renderer/components/ContentSearch'
import ContentItem from '@renderer/components/ContentItem'

const Index = () => {
  const content = useLoaderData() as ContentType[]

  return (
    <main className="contentList-page">
      <div className="list">
        <ContentSearch />
        {content.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </div>
      <div className="contentList">
        <Outlet />
      </div>
    </main>
  )
}

export default Index
