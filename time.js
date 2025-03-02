/*
 * @Author: Salaing
 * @Date: 2025-02-28 15:17:13
 * @LastEditors: Salaing
 * @LastEditTime: 2025-02-28 15:18:51
 * @Description: file content
 */
// 状态枚举
const STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  TIMEOUT: 'TIMEOUT'
}

// 模拟获取数据接口
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(STATUS.SUCCESS)
    }, 2000)
  })
}
// 失败请求
// function FildfetchData() {
//   return new Promise((reject) => {
//     setTimeout(() => {
//       reject(STATUS.FAIL)
//     }, 2000)
//   })
// }

// 实现带有超时功能的 Promise
function executeWithTimeout(fn, ms) {
  // 在这开发代码
  const newPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(STATUS.TIMEOUT)
    }, ms)
  })
  return Promise.race([fn(), newPromise])
}

// 测试用例
// 未超时用例
executeWithTimeout(fetchData, 3000)
  .then((e) => {
    console.log(e)
  })
  .catch((e) => {
    // console.log(STATUS.FAIL)
    console.log('指向')
  })
// 请补充其他测试用例
//超时用例
executeWithTimeout(fetchData, 1000)
  .then((e) => {
    console.log(e)
  })
  .catch((e) => {
    console.log(e)
  })
