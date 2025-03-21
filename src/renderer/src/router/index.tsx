/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:20:25
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-21 18:05:58
 * @Description: file content
 */
import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/pages/Home/index'
import Config from '@renderer/pages/Config/index'
import Category from '@renderer/pages/Category/index'
import Content from '@renderer/pages/Content/index'

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
        path: '',
        element: <Category />,
        children: [
          {
            index: true,
            element: <Content />,
          },
        ],
      },
    ],
  },
]

const router = createHashRouter(routes)

export default router
