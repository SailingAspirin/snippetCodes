import { ChangeEvent, useState } from 'react'
import useCode from './useCode'
import { data as codes } from '@renderer/data'

export default function useSearch() {
  const { setData } = useCode()
  const [search, setSearch] = useState('')
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
