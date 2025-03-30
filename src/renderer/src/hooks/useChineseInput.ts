import { useState, useEffect } from 'react'

const UseChineseInput = (value: string, onChange: (value: string) => void) => {
  const [inputValue, setInputValue] = useState(value)
  const [isComposing, setIsComposing] = useState(false)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isComposing) {
      const value = event.currentTarget.value
      setInputValue(value)
      onChange(value)
    }
  }

  const handleCompositionStart = () => {
    setIsComposing(true)
  }
  const handleCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false)
    const value = event.currentTarget.value
    setInputValue(value)
    onChange(value)
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
