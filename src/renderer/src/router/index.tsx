/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:20:25
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-24 21:25:12
 * @Description: file content
 */
import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/pages/Home/index'
import Config from '@renderer/pages/Config/index'
import Category from '@renderer/pages/Category/index'
import CategoryLoader from '@renderer/pages/Category/CategoryLoader'
import ContentList from '@renderer/pages/ContentList'
import ContentListLoader from '@renderer/pages/ContentList/ContentListLoader'
import Content from '@renderer/pages/Content'
import ContentLoader from '@renderer/pages/Content/ContentLoader'
import ContentAction from '@renderer/pages/Content/ContentAction'
import Welcome from '@renderer/pages/Welcome'

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
            path: 'contentList/:cid?',
            loader: ContentListLoader,
            element: <ContentList />,
            children: [
              {
                index: true,
                element: <Welcome />,
              },
              {
                path: 'content/:id',
                loader: ContentLoader,
                action: ContentAction,
                element: <Content />,
              },
            ],
          },
        ],
      },
    ],
  },
]

const router = createHashRouter(routes)

export default router
