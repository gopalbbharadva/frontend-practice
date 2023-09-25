import { useEffect, useState } from 'react'

export const ProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const timer = setInterval(
      () => setProgressValue((prev) => (prev < 100 ? prev + 1 : prev)),
      100
    )
    if (progressValue === 100) {
      setIsCompleted((prev) => !prev)
    }
    // TODO: need to find for explore how useEffect will work with setInterval
    return () => clearInterval(timer)
  }, [progressValue])

  return (
    <div>
      <p>ProgressBar</p>
      <div className='progress'>
        <span>{progressValue}%</span>
        <div style={{ width: `${progressValue}%` }} />
      </div>
      <p>{isCompleted ? 'Completed' : 'Loading...'}</p>
    </div>
  )
}
