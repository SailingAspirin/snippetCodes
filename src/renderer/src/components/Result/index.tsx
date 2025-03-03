/*
 * @Author: Salaing
 * @Date: 2025-03-01 17:44:02
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-03 17:44:16
 * @Description: file content
 */
import useCodeSelect from '@renderer/hooks/useCodeSelect'
import classNames from 'classnames'
import './styles.scss'
// import { Zero } from './styled'

export default function Index() {
  const { data, id, selectItem } = useCodeSelect()
  return (
    <main className="result">
      {/* css modle css in js  使用modules 会给样式后面加哈希值
       */}
      {data.map((item) => (
        <div
          key={item.id}
          className={classNames({ active: item.id === id })}
          onClick={() => {
            selectItem(item.id)
          }}
        >
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
