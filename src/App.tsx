import { useState } from 'react'
import './App.css'
import { AiOutlineStar } from 'react-icons/ai'
import { Form } from './components/Form'
import { Debounce } from './components/Debounce'
import { Tab } from './components/Tab'
import { Checkbox } from './components/Checkbox'
import { Filter } from './components/Filter'
import { useDebounce } from './hooks/useDebounce'

function App() {
  // const [current, setCurrent] = useState(0)

  // const limit = 5
  // const arr = Array.from(Array(limit).keys())

  const expensiveSearch = () => {
    console.log('e. target')
  }

  const searchHandler = useDebounce(expensiveSearch, 1000)

  return (
    <div>
      <input type='text' onChange={searchHandler} />
      {/* <Event /> */}
      {/* <Filter /> */}
      {/* <CurryingExample /> */}
      {/* <Checkbox /> */}
      {/* <Tab /> */}
      {/* <Debounce /> */}
      {/* <Form /> */}
      {/* {arr.map((star) => (
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
      ))} */}
    </div>
  )
}

export default App
