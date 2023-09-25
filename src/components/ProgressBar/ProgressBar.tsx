import { useEffect, useState } from 'react'

export const ProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setProgressValue((prev) => (prev < 100 ? prev + 1 : prev)),
      100
    )

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
      <p>{progressValue === 100 ? 'Completed' : 'Loading...'}</p>
    </div>
  )
}
