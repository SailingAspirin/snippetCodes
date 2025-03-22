import React from 'react'
import './content.css'
import { useLoaderData, useParams } from 'react-router-dom'

const Index = () => {
  const { cid } = useParams()
  const content = useLoaderData() as ContentType[]
  return (
    <main className="content-page">
      <div className="list">
        {content.map((item) => (
          <a key={item.id}>{item.title}</a>
        ))}
      </div>
      <div className="content">content</div>
    </main>
  )
}

export default Index
