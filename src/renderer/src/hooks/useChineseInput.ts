/*
 * @Author: Salaing
 * @Date: 2025-03-31 08:46:29
 * @LastEditors: Salaing
 * @LastEditTime: 2025-04-01 14:57:05
 * @Description: file content
 */
import { useState } from 'react'

const UseChineseInput = (value: string, handleSearch: (value: string) => void) => {
  const [inputValue, setInputValue] = useState(value)
  const [isComposing, setIsComposing] = useState(false)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setInputValue(value)
    // 如果在中文输入法组合输入期间，不更新值
    if (!isComposing) {
      handleSearch(value)
    }
  }
  /**
   * 当组合输入开始时调用此函数
   * 组合输入是指用户在输入法中选择多个字符进行输入的过程
   * 在这个过程中，用户的选择可能会形成一个完整的语义单元，而不是单个字符
   *
   * @remarks
   * 此函数主要用于设置组合输入状态的开始
   * 它会将isComposing状态设置为true，以表示当前处于组合输入进行中
   * 这个状态可以帮助组件在处理输入事件时区分普通输入和组合输入
   */
  const handleCompositionStart = () => {
    setIsComposing(true)
  }
  const handleCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false)
    const value = event.currentTarget.value
    handleSearch(value)
  }
  return {
    inputValue,
    setInputValue,
    handleInput,
    handleCompositionStart,
    handleCompositionEnd,
  }
}

export default UseChineseInput
