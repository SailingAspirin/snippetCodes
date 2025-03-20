/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-05 22:37:30
 * @Description: file content
 */
import './assets/main.css'
import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
