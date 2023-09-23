import { useEffect, useState } from 'react'

export const TrafficLight = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let intervalId = 0
    intervalId = setInterval(() => setTimer((prev) => prev + 1), 1000)
    if (timer > 15) {
      setTimer(0)
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [timer])

  return (
    <div>
      <div className={`light red ${timer <= 4 ? '' : 'disabled'}`}>Red</div>
      <div
        className={`light yellow ${
          timer >= 5 && timer <= 8 ? '' : 'disabled'
        } `}
      >
        Yellow
      </div>
      <div className={`light green ${timer > 8 ? '' : 'disabled'}`}>Green</div>
    </div>
  )
}
