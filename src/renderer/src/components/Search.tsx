/*
/*
 * @Author: Salaing
 * @Date: 2025-02-28 00:12:30
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-02 14:48:45
 * @Description: 注意设置了拖动之后的区域是不能响应鼠标事件的
 */
import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input, Select } from 'antd'
import useChineseInput from '@renderer/hooks/useChineseInput'


function Search() {
  const { search, handleSearch } = useSearch()
  const { inputValue, handleInput, handleCompositionStart, handleCompositionEnd } = useChineseInput(search, handleSearch);


  return (
    <div className="bg-slate-50 p-5 rounded-lg pb-2 drag">
      <section className="bg-slate-200 p-3  rounded-lg flex items-center gap-1 nodrag">
        <SettingOne
          theme="outline"
          size="16"
          fill="#34459e"
          className="cursor-pointer"
          strokeWidth={3}
          onClick={() => {
            // window.api?.openConfigWindow()
            window.api.openWindow('config')
          }}
        />
        <Input
          className="w-full outline-none text-xl bg-slate-200 text-slate-600"
          // autoFocus
          value={inputValue}
          onInput={handleInput}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      </section>
      <section className="text-center select-none text-slate-600 text-xs mt-2 hover:cursor-pointer nodrag ">
        片段库/剪切板
      </section>
    </div>
  )
}

export default Search
