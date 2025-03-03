/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-03 18:43:09
 * @Description: file content
 */
import { useState } from 'react'
import Search from './components/Search'
// import Qiangjuan from './components/Qiangjuan'
// import OverTime from './components/overTime'
import Result from './components/Result'
import { CodeProvider } from './context/CodeProvider'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <CodeProvider>
          <Search />
          <Result />
        </CodeProvider>
      </StyleSheetManager>

      {/* <Qiangjuan time={100} /> */}
      {/* <OverTime /> */}
    </>
  )
}

export default App
