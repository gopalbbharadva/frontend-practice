import { useEffect, useState } from 'react'

export const Box = () => {
  const arr = ['one', 'two', 'third', 'fourth', 'five', 'six']
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [selectedBoxes, setSelectedBoxes] = useState<string[]>([])

  useEffect(() => {
    let timerId = 0
    if (isAllSelected) {
      timerId = setInterval(() => {
        // removing last item from array which was added to the array.
        setSelectedBoxes((prev) => prev.filter((_, i) => i !== prev.length - 1))
      }, 1000)
    }
    if (selectedBoxes.length === 0) {
      setIsAllSelected(false)
    }
    return () => clearInterval(timerId)
  }, [isAllSelected, selectedBoxes])

  const boxHandler = (item: string) => {
    setSelectedBoxes((prev) =>
      prev.includes(item)
        ? //   here checking if item exists then remove it
          prev.filter((element) => element !== item)
        : //   if item not exists then add it.
          [...prev, item]
    )
    // once all items selected then making flag to true that all items are selected.
    if (item === arr[arr.length - 1]) {
      setIsAllSelected(true)
    }
  }

  return (
    <div>
      {arr.map((item) => (
        <div
          key={item}
          onClick={() => boxHandler(item)}
          className={`border p-4 mb-10 cursor-pointer ${
            selectedBoxes.includes(item) ? 'bg-green-500' : ''
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
