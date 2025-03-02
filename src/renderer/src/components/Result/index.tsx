/*
 * @Author: Salaing
 * @Date: 2025-03-01 17:44:02
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-02 09:37:53
 * @Description: file content
 */
import { useState } from 'react'
import { data as codes } from '@renderer/data'
export default function Index() {
  const [data, setData] = useState(codes)
  return (
    <main className="bg-slate-50 p-3 rounded-br-lg  rounded-bl-lg -mt-[7px]">
      {data.map((item) => (
        <div key={item.id} className="p-3 text-slate-700 truncate mb-2">
          {item.content}
        </div>
      ))}
    </main>
  )
}
