import { useState } from 'react'
import Search from './components/Search'
// import Qiangjuan from './components/Qiangjuan'
// import OverTime from './components/overTime'
import Result from './components/Result'
import { CodeContext } from './context/CodeContext'
import { data as codes } from './data'
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [data, setData] = useState(codes)

  return (
    <>
      <CodeContext.Provider value={{ data, setData }}>
        <Search />
        <Result />
      </CodeContext.Provider>
      {/* <Qiangjuan time={100} /> */}
      {/* <OverTime /> */}
    </>
  )
}

export default App
