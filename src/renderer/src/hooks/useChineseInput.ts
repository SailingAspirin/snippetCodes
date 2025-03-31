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
