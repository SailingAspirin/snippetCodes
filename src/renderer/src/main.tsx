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
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { ContextMenuProvider } from 'mantine-contextmenu'

import '@mantine/core/styles.layer.css'
import 'mantine-contextmenu/styles.layer.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <MantineProvider defaultColorScheme="auto">
    <ContextMenuProvider>
      <RouterProvider router={router} />
    </ContextMenuProvider>
  </MantineProvider>

  // </React.StrictMode>
)
