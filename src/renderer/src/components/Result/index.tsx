/*
 * @Author: Salaing
 * @Date: 2025-03-01 17:44:02
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-03 17:26:44
 * @Description: file content
 */
import useCode from '@renderer/hooks/useCode'
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import './styles.scss'
// import { Zero } from './styled'

export default function Index() {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setCurrentIndex((prev) => (prev - 1 < 0 ? data.length - 1 : prev - 1))
          break
        case 'ArrowDown':
          setCurrentIndex((prev) => (prev + 1 > data.length - 1 ? 0 : prev + 1))
          break
        case 'Enter':
          navigator.clipboard.writeText(data[currentIndex].content)
          break
        default:
          break
      }
    },
    [data, currentIndex]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data, currentIndex])

  useEffect(() => {
    setCurrentIndex(0)
  }, [data])

  return (
    <main className="result">
      {/* css modle css in js  使用modules 会给样式后面加哈希值
       */}
      {data.map((item, index) => (
        <div key={item.id} className={classNames({ active: currentIndex === index })}>
          {item.content}
        </div>
        // <Zero key={item.id} isActive={currentIndex == index}>
        //   {item.content}
        // </Zero>
        // static 静态定位 relative 相对定位 相对自己正常位置
        // absolute 绝对定位 脱离正常流 相对于 最近一个相对定位的父元素
        // fixed 固定定位 相对于 浏览器窗口
        // sticky 粘性定位 相对于 浏览器窗口 跨越特定阈值之前表现为相对 之后固定
      ))}
    </main>
  )
}
