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
  } else {
    return <Alert message={error} type="info" showIcon />
  }
}

export default Error
