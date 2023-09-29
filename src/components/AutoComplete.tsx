import { useState } from 'react'
import { useClickOutside } from '../hooks/useOutsideClick'

export const AutoComplete = () => {
  const arr = ['football', 'cricket', 'carrom', 'badminton']
  const [selectedItem, setSelectedItem] = useState('')
  const [showList, setShowList] = useState(false)
  const [itemsList, setItemsList] = useState(arr)
  const focusHandler = () => {
    setShowList(true)
  }

  const blurHandler = () => {
    setShowList(false)
  }

  const listRef = useClickOutside(blurHandler)

  const selectItemHandler = (currentSelectedItem: string) => {
    setSelectedItem(currentSelectedItem)
    setShowList((prev) => !prev)
  }
  const changeHandler = (e: any) => {
    setSelectedItem(e.target.value)
    const currentValue = e.target.value
    const filteredOptions = arr.filter((option) =>
      option.includes(currentValue)
    )
    setItemsList(filteredOptions)
  }
  const buttonClickHandler = () => {
    setSelectedItem('')
  }

  console.log(itemsList, 'item list')

  return (
    <div className='flex justify-center items-center flex-col w-fit relative'>
      <input
        className='cursor-pointer p-2 rounded-md'
        onChange={changeHandler}
        type='text'
        placeholder='Enter details'
        onFocus={focusHandler}
        value={selectedItem}
      />
      {selectedItem.length != 0 && (
        <button
          onClick={buttonClickHandler}
          className='absolute bg-transparent right-1 top-1 rounded-full px-3 py-1 hover:border-gray-400'
        >
          X
        </button>
      )}
      {showList && (
        <div
          className='flex justify-start items-center flex-col w-full'
          ref={listRef}
        >
          {itemsList.length !== 0 ? (
            itemsList.map((item) => (
              <span
                className={`${
                  selectedItem === item ? 'bg-slate-400' : ''
                } cursor-pointer text-start w-full p-1 hover:bg-slate-500`}
                onClick={() => selectItemHandler(item)}
                key={item}
              >
                {item}
              </span>
            ))
          ) : (
            <p>No options found</p>
          )}
        </div>
      )}
    </div>
  )
}
