import { useEffect, useState } from 'react'
// if seconds , minute and hours all are zero then just clear the time interval and set isRunning to false

export const StopWatch = () => {
  let timerId = 0
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    timerId = setInterval(() => {
      if (isRunning) {
        if (seconds > 60) {
          setMinutes((prev) => prev + 1)
          setSeconds((prev) => prev - 60)
        }
        if (minutes > 60) {
          setHours((prev) => prev + 1)
          setMinutes((prev) => prev - 60)
        }
        if (seconds === 0 && minutes === 0 && hours === 0) {
          clearInterval(timerId)
          setIsRunning((prev) => !prev)
        } else if (seconds !== 0) {
          setSeconds((prev) => prev - 1)
        } else if (minutes !== 0 && seconds === 0) {
          setSeconds(59)
          setMinutes((prev) => prev - 1)
        } else if (hours !== 0 && minutes === 0) {
          setMinutes(60)
          setHours((prev) => prev - 1)
        }
      }
    }, 1000)

    return () => clearInterval(timerId)
  }, [isRunning, seconds, minutes, hours])

  const startButtonHandler = () => {
    setIsRunning((prev) => !prev)
  }

  const stopButtonHandler = () => {
    clearInterval(timerId)
    setIsRunning(false)
  }
  const resetButtonHandler = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    setIsRunning(false)
  }

  return (
    <div>
      <h1>Stop watch timer</h1>
      <span>Seconds</span>
      <span>Minutes</span>
      <span>Hours</span>
      <br />
      <br />
      <div>
        <input
          onChange={(e) => setHours(Number(e.target.value))}
          value={hours}
          type='number'
          placeholder='hours'
          name='hours'
        />
        <input
          onChange={(e) => setMinutes(Number(e.target.value))}
          value={minutes}
          type='number'
          placeholder='minutes'
          name='minutes'
        />
        <input
          onChange={(e) => setSeconds(Number(e.target.value))}
          value={seconds}
          type='number'
          placeholder='seconds'
          name='seconds'
        />
      </div>
      <br />
      <br />
      <div>
        <button onClick={startButtonHandler}>Start</button>
        <button onClick={stopButtonHandler}>Stop</button>
        <button onClick={resetButtonHandler}>Reset</button>
      </div>
    </div>
  )
}
