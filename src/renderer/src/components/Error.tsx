/*
 * @Author: Salaing
 * @Date: 2025-03-04 18:55:17
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-20 17:02:44
 * @Description: file content
 */
import { useStore } from '@renderer/store/useStore'
import { useEffect } from 'react'
import { Alert } from 'antd'

const Error = () => {
  const { error } = useStore()
  const setError = useStore((state) => state.setError)

  useEffect(() => {
    const cancel = setTimeout(() => {
      setError('')
    }, 2000)

    return () => {
      clearTimeout(cancel)
    }
  }, [])

  if (!error) {
    return null
  }
  return <Alert message={error} type="info" showIcon />
}

export default Error
