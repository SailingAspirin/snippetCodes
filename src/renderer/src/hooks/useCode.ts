/*
 * @Author: Salaing
 * @Date: 2025-03-02 18:23:36
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-02 19:33:20
 * @Description: file content
 */
import { CodeContext } from '@renderer/context/CodeContext'
import { useContext } from 'react'

export default () => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    // throw console.error('CodeContext.provider 定义错误')
    throw new Error('CodeContext.provider 定义错误')
  }
  return { ...context }
}
