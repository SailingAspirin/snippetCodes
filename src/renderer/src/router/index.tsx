/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:20:25
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 23:29:40
 * @Description: file content
 */
import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/layouts/Home/index'
import Config from '@renderer/layouts/Config/index'
import Category from '@renderer/pages/Category/index'
import CategoryLoader from '@renderer/pages/Category/CategoryLoader'
import ContentList from '@renderer/pages/ContentList'
import ContentListLoader from '@renderer/pages/ContentList/ContentListLoader'
import ContentListAction from '@renderer/pages/ContentList/ContentListAction'
import Content from '@renderer/pages/Content'
import ContentLoader from '@renderer/pages/Content/ContentLoader'
import ContentAction from '@renderer/pages/Content/ContentAction'
import Welcome from '@renderer/pages/Welcome'
import CategoryAction from '@renderer/pages/Category/CategoryAction'
import Setting from '@renderer/pages/Setting'

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
        index: true,
        element: <Setting />,
      },
      {
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        action: CategoryAction,
        children: [
          {
            path: 'contentList/:cid?',
            loader: ContentListLoader,
            action: ContentListAction,
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
