import { Code } from '@icon-park/react'
import React from 'react'

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-sm text-slate-700 opacity-80">
      <Code theme="outline" size="50" fill="#000" strokeWidth={3} />
      <div className="text-center">收集你的碎片内容</div>
    </div>
  )
}

export default Index
