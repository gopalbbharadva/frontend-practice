import { useEffect, useState } from 'react'

export const useTimer = () => {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  let timerId = 0
  useEffect(() => {
    if (isRunning) {
      timerId = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timerId)
  }, [isRunning])

  const startTimerHandler = () => {
    setIsRunning(true)
  }

  const stopTimerHandler = () => {
    clearInterval(timerId)
    setIsRunning(false)
  }

  const restartTimerHandler = () => {
    setIsRunning(true)
    setTimer(0)
  }

  return { timer, startTimerHandler, stopTimerHandler, restartTimerHandler, isRunning }
}
