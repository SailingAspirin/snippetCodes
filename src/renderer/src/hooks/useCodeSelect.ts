import { useCallback, useEffect, useState } from 'react'
import useCode from './useCode'
import { useStore } from '@renderer/store/useStore'

export default () => {
  //useStore((state) => state)写法会导致 其他的 state 改变时，useStore也会重新执行，重新渲染
  // const { data, setData } = useStore((state) => state)

  const data = useStore((state) => state.data)
  const setData = useStore((state) => state.setData)
  const setSearch = useStore((state) => state.setSearch)
  const [id, setId] = useState(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setId((id) => {
            const index = data.findIndex((item) => item.id === id)
            return data[index - 1]?.id || data[data.length - 1].id
          })
          break
        case 'ArrowDown':
          setId((id) => {
            const index = data.findIndex((item) => item.id === id)
            return data[index + 1]?.id || data[0].id
          })
          break
        case 'Enter':
          selectItem(id)
          break
        default:
          break
      }
    },
    [data, id]
  )

  const selectItem = (id: number) => {
    const content = data.find((item) => item.id === id)?.content
    if (content) {
      navigator.clipboard.writeText(content)
      setData([])
      setSearch('')
      window.api.hideWindow()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data, id])

  useEffect(() => {
    setId(0)
  }, [data])

  return { data, id, selectItem }
}
