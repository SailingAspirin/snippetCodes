/*
 * @Author: Salaing
 * @Date: 2025-03-02 09:37:38
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-02 18:40:55
 * @Description: file content
 */
import { createContext, Dispatch, SetStateAction } from 'react'
import { DataType } from '@renderer/data'

interface ContextProps {
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)
