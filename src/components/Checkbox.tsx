import { useState } from 'react'

const listArray = ['cat', 'dog', 'lion', 'tiger']

export const Checkbox = () => {
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([])

  const checkHandler = (e: any) => {
    if (!selectedAnimals.includes(e.target.value)) {
      setSelectedAnimals((prev) => [...prev, e.target.value])
    } else {
      setSelectedAnimals((prev) =>
        prev.filter((item) => item !== e.target.value)
      )
    }
  }
  const selectAllHandler = () => {
    if (selectedAnimals.length === listArray.length) {
      setSelectedAnimals([])
    } else {
      setSelectedAnimals(listArray)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <label className='label' id='select_all'>
        <input
          checked={selectedAnimals.length === listArray.length}
          onChange={selectAllHandler}
          type='checkbox'
          name='select_all'
        />
        Select All
      </label>
      <p>************************</p>
      {listArray.map((animal) => (
        <label key={animal} className='label' id={animal}>
          <input
            value={animal}
            onChange={checkHandler}
            type='checkbox'
            name={animal}
            checked={selectedAnimals.includes(animal)}
          />
          {animal}
        </label>
      ))}
    </div>
  )
}
