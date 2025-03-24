/*
 * @Author: Salaing
 * @Date: 2025-03-23 10:32:31
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-23 11:01:59
 * @Description: file content
 */
import { useLoaderData } from 'react-router-dom'

const Index = () => {
  const content = useLoaderData() as ContentType
  return (
    <main className="content-page">
      <h1>{content.title}</h1>
      <div>{content.content}</div>
    </main>
  )
}

export default Index
