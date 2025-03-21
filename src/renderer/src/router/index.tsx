/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:20:25
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-05 12:27:03
 * @Description: file content
 */
import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/pages/Home'
import Config from '@renderer/pages/Config'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/config', // 确保路径以斜杠开头
    element: <Config />,
  },
]

const router = createHashRouter(routes)

export default router
