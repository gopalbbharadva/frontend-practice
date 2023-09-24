import './App.css'
import { useState } from 'react'
import { Modal } from './components/Modal/Modal'
import { Overlay } from './components/Modal/Overlay'
import { Timer } from './components/Timer'
import { TrafficLight } from './components/TrafficLight'
import { Folder } from './components/Folder'
import { foldersData } from './data/foldersData'

function App() {
  // const [showModal, setShowModal] = useState(false)

  // const onCloseHandler = () => setShowModal((prev) => !prev)
  return (
    <div>
      <Folder foldersData={foldersData} />
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
