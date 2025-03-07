import { ChangeEvent, useEffect, useState } from 'react'
import useCode from './useCode'
import { data as codes } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'

export default function useSearch() {
  const data = useStore((state) => state.data)
  const setData = useStore((state) => state.setData)

  const search = useStore((state) => state.search)
  const setSearch = useStore((state) => state.setSearch)
  const setId = useStore((state) => state.setId)

  useEffect(() => {
    setId(data[0].id || 0)
  }, [data])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const content = e.target.value.toLocaleLowerCase() || '@@'
    setData(codes.filter((item) => item.content.toLowerCase().includes(content)).splice(0, 8))
  }

  return {
    search,
    handleSearch,
  }
}
