import { useEffect, useState } from 'react'

export const Timer = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // When the TimerApp functional component is initially executed (on the first render),
    // it declares the timer variable, which is local to the function.
    let timer = 0

    if (isRunning) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000)
    } else {
      clearInterval(timer)
    }

    // When the useEffect is executed, it captures the current value of intervalId within
    // its closure. This means that the intervalId variable inside the return function of
    // useEffect will always reference the most recent value of intervalId when the
    // useEffect was initially run
    return () => {
     //   This behavior allows the return function to clear the correct interval even after
     //   multiple re-renders of the component, maintaining the association between the cleanup
     //   function and the specific interval that was created during the initial render.
      clearInterval(timer)
    }
  }, [isRunning])

  // On subsequent renders of the component, the intervalId variable is re-declared and
  // initialized again, but the return function still holds a reference to the initial intervalId
  // value from when it was first created.

  const startButtonHandler = () => {
    setIsRunning(true)
  }

  const stopButtonHandler = () => {
    setIsRunning(false)
  }

  const restartButtonHandler = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  return (
    <div>
      <p>{seconds}</p>
      <button onClick={startButtonHandler} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopButtonHandler} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={restartButtonHandler}>Restart</button>
    </div>
  )
}
