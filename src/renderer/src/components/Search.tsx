/*
 * @Author: Salaing
 * @Date: 2025-02-28 00:12:30
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-05 11:03:17
 * @Description: 注意设置了拖动之后的区域是不能响应鼠标事件的
 */
import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { useEffect } from 'react'

function Search() {
  const { search, handleSearch } = useSearch()
  useEffect(() => {
    console.log('search')
  }, [])

  return (
    <div className="bg-slate-50 p-5 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg flex items-center gap-1 nodrag">
        <SettingOne
          theme="outline"
          size="20"
          fill="#34459e"
          className="cursor-pointer"
          strokeWidth={3}
          onClick={() => {
            window.api?.openConfigWindow()
          }}
        />
        <input
          className="w-full outline-none text-xl bg-slate-200 text-slate-600"
          value={search}
          onChange={handleSearch}
        />
      </section>
      <section className="flex justify-center text-slate-600 hover:cursor-pointer nodrag">
        片段库/剪切板
      </section>
    </div>
  )
}

export default Search
