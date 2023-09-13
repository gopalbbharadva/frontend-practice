import { useState } from 'react'
import './App.css'
import { AiOutlineStar } from 'react-icons/ai'
import { Form } from './components/Form'
import { Debounce } from './components/Debounce'
import { Tab } from './components/Tab'
import { Checkbox } from './components/Checkbox'
import { CurryingExample } from './components/CurryingExample'
import { Filter } from './components/Filter'

function App() {
  const [current, setCurrent] = useState(0)

  const limit = 5
  const arr = Array.from(Array(limit).keys())
  // console.log(current, 'current')

  // const sum = (a: number) => {
  //   // if (!a) {
  //   //   return a
  //   // } else {
  //   //   return sum(a)
  //   // }
  //   return a + sum(a)
  // }

  // console.log(sum(3)(4))

  return (
    <div>
      <Filter />
      {/* <CurryingExample /> */}
      {/* <Checkbox /> */}
      {/* <Tab /> */}
      {/* <Debounce /> */}
      {/* <Form /> */}
      {arr.map((star) => (
        <button onMouseEnter={() => setCurrent(star + 1)} className='button'>
          <AiOutlineStar
            size='30'
            key={star}
            style={{
              color: star <= current - 1 ? 'red' : '',
              cursor: 'pointer',
            }}
          />
        </button>
      ))}
    </div>
  )
}

export default App
