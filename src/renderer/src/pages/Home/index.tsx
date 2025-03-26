/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-26 23:07:31
 * @Description: file content
 */
import React, { MutableRefObject, useRef, useEffect } from 'react'
import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import { CodeProvider } from '@renderer/context/CodeProvider'
import useShortCut from '@renderer/hooks/useShortCut'
import Error from '@renderer/components/Error'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'

const Index = () => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const { register } = useShortCut()
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()

  useEffect(() => {
    // register('search', 'CommandOrControl+Shift+[')
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLElement>)
    window.api.openConfigWindow()
  }, [])
  return (
    <>
      {/* <CodeProvider> */}
      <main className="relativ" ref={mainRef}>
        <Error />
        <Search />
        <Result />
      </main>

      {/* </CodeProvider> */}
    </>
  )
}

export default Index
