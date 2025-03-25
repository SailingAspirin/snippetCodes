/*
 * @Author: Salaing
 * @Date: 2025-03-21 18:37:27
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-25 22:34:58
 * @Description: file content
 */
import { useEffect, useRef } from 'react'
import './contentList.css'
import {
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
  Form,
} from 'react-router-dom'
import dayjs from 'dayjs'
import { Button, Input } from 'antd'
import { Add } from '@icon-park/react'

const Index = () => {
  const content = useLoaderData() as ContentType[]
  const submit = useSubmit()

  // useEffect(() => {
  //   if (listRef.current) {
  //     listRef.current.scrollTop = 0
  //   }
  //   if (content.length > 0) {
  //     navigate(`/config/category/contentList/${content[0].category_id}/content/${content[0].id}`)
  //   }
  // }, [content, navigate])

  // const handleSearch = (values: { searchWord: string }) => {
  //   submit(values, { method: 'post' })
  // }

  return (
    <main className="contentList-page">
      <div className="list">
        <Form>
          <div className="border-b flex justify-between items-center">
            <input
              name="searchWord"
              type="text"
              placeholder="搜索..."
              className="outline-none text-sm py-2 px-3 w-full"
            />
            {/* <Button size="small" type="default" htmlType="submit">
              搜索
            </Button> */}
            <Add
              theme="outline"
              size="18"
              fill="#000"
              strokeWidth={2}
              onClick={() => {
                submit({ action: 'add' }, { method: 'post' })
              }}
            />
          </div>
        </Form>

        {content.map((item) => (
          <NavLink
            to={`/config/category/contentList/${item.category_id}/content/${item.id}`}
            className="flex items-center justify-between"
            key={item.id}
          >
            <div className="truncate">{item.title}</div>
            <div>{dayjs(item.create_time).format('YYYY/MM/DD')}</div>
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
