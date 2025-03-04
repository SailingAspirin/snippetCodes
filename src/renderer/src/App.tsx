/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-04 19:01:51
 * @Description: file content
 */
import { useEffect, useState } from 'react'
import Search from './components/Search'
// import Qiangjuan from './components/Qiangjuan'
// import OverTime from './components/overTime'
import Result from './components/Result'
import { CodeProvider } from './context/CodeProvider'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import useShortCut from './hooks/useShortCut'
import Error from './components/Error'
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  // window.api.shortCut('search', 'CommandOrControl+Shift+;')
  const { register } = useShortCut()
  useEffect(() => {
    // ipcHandle()
    register('search', 'CommandOrControl+Shift+[')
  }, [])
  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        {/* <CodeProvider> */}
        <Error />
        <Search />
        <Result />
        {/* </CodeProvider> */}
      </StyleSheetManager>

      {/* <Qiangjuan time={100} /> */}
      {/* <OverTime /> */}
    </>
  )
}

export default App
