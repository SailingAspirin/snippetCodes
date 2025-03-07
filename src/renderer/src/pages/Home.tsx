/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:18:54
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-07 16:51:54
 * @Description: file content
 */
import React, { useRef } from 'react'

/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-04 19:01:51
 * @Description: file content
 */
import { useEffect, useState } from 'react'
import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import { CodeProvider } from '@renderer/context/CodeProvider'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useShortCut from '@renderer/hooks/useShortCut'
import Error from '@renderer/components/Error'
function Home(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  // window.api.shortCut('search', 'CommandOrControl+Shift+;')
  const { register } = useShortCut()
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mainRef.current?.addEventListener('mouseover', (e: MouseEvent) => {
      window.api?.setIgnoreMouseEvents(false)
    })

    document.body?.addEventListener('mouseover', (e: MouseEvent) => {
      if (e.target === document.body) {
        console.log('body', e.target)
        window.api?.setIgnoreMouseEvents(true, { forward: true })
      }
    })
    // mainRef.current?.addEventListener('mouseout', (e: MouseEvent) => {
    //   console.log('mouseout', e.target)
    //   window.api?.setIgnoreMouseEvents(true, { forward: true })
    // })
  }, [])
  useEffect(() => {
    register('search', 'CommandOrControl+Shift+[')
    console.log('我是父组件')
  }, [])
  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        {/* <CodeProvider> */}
        <main className="relative p-3 bg-red-400" ref={mainRef}>
          <Error />
          <Search />
          <Result />
        </main>

        {/* </CodeProvider> */}
      </StyleSheetManager>

      {/* <Qiangjuan time={100} /> */}
      {/* <OverTime /> */}
    </>
  )
}

export default Home
