import './App.css'
import { useState } from 'react'
import { Modal } from './components/Modal/Modal'
import { Overlay } from './components/Modal/Overlay'
import { Timer } from './components/Timer'
import { TrafficLight } from './components/TrafficLight'
import { Folder } from './components/Folder'
import { foldersData } from './data/foldersData'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { Products } from './components/Pagination/Products'
import { StopWatch } from './components/StopWatch'
import { AutoComplete } from './components/AutoComplete'
import { useTimer } from './hooks/useTimer'
import { Box } from './components/Box'

function App() {
  // const [showModal, setShowModal] = useState(false)
  // const onCloseHandler = () => setShowModal((prev) => !prev)
  // const {
  //   timer,
  //   isRunning,
  //   restartTimerHandler,
  //   startTimerHandler,
  //   stopTimerHandler,
  // } = useTimer()
  return (
    <div className='flex justify-center items-center'>
      <Box />
      {/* <AutoComplete /> */}
      {/* <StopWatch /> */}
      {/* <Products /> */}
      {/* <ProgressBar /> */}
      {/* <Folder foldersData={foldersData} /> */}
      {/* <button onClick={() => setShowModal((prev) => !prev)}>Show modal</button>
      {showModal && (
        <Overlay>
          <Modal onClose={onCloseHandler} />
        </Overlay>
      )} */}
      {/* <TrafficLight /> */}
      {/* <Timer /> */}
    </div>
  )
}

export default App
