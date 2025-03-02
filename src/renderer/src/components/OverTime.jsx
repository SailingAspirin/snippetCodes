/*
 * @Author: Salaing
 * @Date: 2025-02-28 14:29:49
 * @LastEditors: Salaing
 * @LastEditTime: 2025-02-28 14:52:35
 * @Description: file content
 */
import React from 'react'
import { useEffect } from 'react'

const OverTime = () => {
  function timeOutPromise(promise, timeout) {
    const newPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('请求超时'))
      }, timeout)
    })

    return Promise.race([promise, newPromise])
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('请求成功')
    }, 2000) // 设置请求超时时间为2秒
  })

  useEffect(() => {
    timeOutPromise(myPromise, 3000)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.error(error)
      })
    return () => {}
  }, [])

  return <div></div>
}

export default OverTime
