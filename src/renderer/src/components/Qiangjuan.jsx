import React, { useState, useEffect } from 'react'

const Qiangjuan = ({ time }) => {
  const [countdown, setCountdown] = useState(time)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1)
      } else {
        setIsEnd(true)
        clearInterval(interval)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [countdown])

  const formateTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
  }

  const handldleClick = () => {
    alert('抢到了')
  }

  return (
    <div>
      <h1>倒计时抢卷：{formateTime(countdown)}</h1>
      <button
        disabled={isEnd}
        onClick={() => {
          handldleClick()
        }}
      >
        {isEnd ? '已抢完' : '抢卷'}
      </button>
    </div>
  )
}

export default Qiangjuan
