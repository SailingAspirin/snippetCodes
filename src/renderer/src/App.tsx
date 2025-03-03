/*
 * @Author: Salaing
 * @Date: 2025-02-27 21:49:11
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-03 15:24:55
 * @Description: file content
 */
import { useState } from 'react'
import Search from './components/Search'
// import Qiangjuan from './components/Qiangjuan'
// import OverTime from './components/overTime'
import Result from './components/Result'
import { CodeContext } from './context/CodeContext'
import { DataType } from './data'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [data, setData] = useState<DataType[]>([])

  // Tailwind-Styled-Component
  return (
    <>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <CodeContext.Provider value={{ data, setData }}>
          <Search />
          <Result />
        </CodeContext.Provider>
      </StyleSheetManager>

      {/* <Qiangjuan time={100} /> */}
      {/* <OverTime /> */}
    </>
  )
}

export default App
