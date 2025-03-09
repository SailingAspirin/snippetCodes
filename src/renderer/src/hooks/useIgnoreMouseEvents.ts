/*
 * @Author: Salaing
 * @Date: 2025-03-09 19:02:04
 * @LastEditors: Salaing
 * @LastEditTime: 2025-03-09 19:24:07
 * @Description: file content
 */
import { MutableRefObject } from 'react'
// MutableRefObject 表示可变引用对象，它表示一个可变引用，指向一个对象。

export default () => {
  const setIgnoreMouseEvents = <T extends HTMLElement>(el: MutableRefObject<T>) => {
    el.current?.addEventListener('mouseover', () => {
      window.api?.setIgnoreMouseEvents(false)
    })

    document.body?.addEventListener('mouseover', (e: MouseEvent) => {
      console.log('🛸u....ts:19/(e):', e.target)
      if (e.target === document.body) {
        console.log('🛸u....ts:20/():', e.target)
        window.api?.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }
  return { setIgnoreMouseEvents }
}
