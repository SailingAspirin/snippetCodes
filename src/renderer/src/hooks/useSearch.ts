/*
 * @Author: Salaing
 * @Date: 2025-03-03 18:21:07
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-30 23:08:18
 * @Description: file content
 */
/*
 * @Author: Salaing
 * @Date: 2025-03-03 18:21:07
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-07 14:37:24
 * @Description: file content
 */
import { ChangeEvent, useEffect, useState } from 'react'
import useCode from './useCode'
import { data as codes } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'
import useChineseInput from './useChineseInput'

export default function useSearch() {
  const data = useStore((state) => state.data)
  const setData = useStore((state) => state.setData)

  const search = useStore((state) => state.search)
  const setSearch = useStore((state) => state.setSearch)
  const setId = useStore((state) => state.setId)
  
  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setId(data[0].id || 0)
    } else {
      // 处理 data 为空或无效的情况
      setId(0) // 或者设置一个默认值
    }
  }, [data])

  const handleSearch = (e) => {
    
    console.log('🔥useSearch.ts:39/():',e)
    setSearch(e)
    const content = e.toLocaleLowerCase() || '@@'
    setData(codes.filter((item) => item.content.toLowerCase().includes(content)).splice(0, 8))
  }

  return {
    search,
    handleSearch,
  }
}
