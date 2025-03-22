/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:20:25
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-22 16:36:28
 * @Description: file content
 */
import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/pages/Home/index'
import Config from '@renderer/pages/Config/index'
import Category from '@renderer/pages/Category/index'
import Content from '@renderer/pages/Content/index'
import CategoryLoader from '@renderer/pages/Category/CategoryLoader'
import ContentListLoader from '@renderer/pages/Content/ContentListLoader'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'config', // 确保路径以斜杠开头
    element: <Config />,
    children: [
      {
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        children: [
          {
            path: 'contentList/:cid',
            loader: ContentListLoader,
            element: <Content />,
          },
        ],
      },
    ],
  },
]

const router = createHashRouter(routes)

export default router
