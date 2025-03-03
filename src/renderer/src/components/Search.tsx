/*
 * @Author: Salaing
 * @Date: 2025-02-28 00:12:30
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-03 18:30:35
 * @Description: file content
 */
import useSearch from '@renderer/hooks/useSearch'

function Search() {
  const { search, handleSearch } = useSearch()
  return (
    <div className="bg-slate-50 p-5 rounded-lg  drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          className="w-full outline-none text-2xl bg-slate-200 text-slate-600"
          value={search}
          onChange={handleSearch}
        />
      </section>
    </div>
  )
}

export default Search
