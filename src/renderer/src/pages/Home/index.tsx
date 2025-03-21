/*
 * @Author: Salaing
 * @Date: 2025-03-05 11:18:54
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-21 15:16:50
 * @Description: file content
 */
import React, { MutableRefObject, useRef } from 'react'

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
      <StyleSheetManager shouldForwardProp={isPropValid}>
        {/* <CodeProvider> */}
        <main className="relativ " ref={mainRef}>
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

export default Index
