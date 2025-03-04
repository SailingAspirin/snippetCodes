import { useStore } from '@renderer/store/useStore'
import { useEffect, useState } from 'react'

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
    return <div className="bg-red-600 text-white">{error}</div>
  }
}

export default Error
