import { useState } from 'react'
import { CodeContext } from './CodeContext'
import { DataType } from '@renderer/data'
export const CodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataType[]>([])

  return <CodeContext.Provider value={{ data, setData }}>{children}</CodeContext.Provider>
}
