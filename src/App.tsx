import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal/Modal'
import { Overlay } from './components/Modal/Overlay'
import { Timer } from './components/Timer'
import { TrafficLight } from './components/TrafficLight'

function App() {
  const [showModal, setShowModal] = useState(false)

  const onCloseHandler = () => setShowModal((prev) => !prev)
  return (
    <div>
      <button onClick={() => setShowModal((prev) => !prev)}>Show modal</button>
      {showModal && (
        <Overlay>
          <Modal onClose={onCloseHandler} />
        </Overlay>
      )}
      {/* <TrafficLight /> */}
      {/* <Timer /> */}
    </div>
  )
}

export default App
