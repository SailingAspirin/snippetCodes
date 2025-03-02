import React, { forwardRef, useEffect } from 'react'

const InputRepeat = forwardRef((props, ref) => {
  const { placeholder, value, onChange, OnBlur, className, ...others } = props

  return (
    <input
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={OnBlur}
      className={className}
      {...others}
    />
  )
})

export default InputRepeat
