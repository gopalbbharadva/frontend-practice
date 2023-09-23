export const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='modal-container'>
      <h3 className='modal-header'>Header of the modal</h3>
      <div className='modal-body'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          tenetur atque nemo aut ab architecto velit. Debitis facere vero, iure
          dolorem quia eveniet. Voluptate, voluptas vero voluptates doloribus
          illum similique.
        </p>
        <button onClick={onClose} className='modal-close-button'>
          X
        </button>
      </div>
    </div>
  )
}
