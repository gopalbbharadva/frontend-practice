import React from 'react'

export const CurryingExample = () => {
  // const changeHandler = (e) => {
  //   console.log(e.target.value, 'values')
  // }

  // const clickHandler = () => {
  //   console.log('button clicked')
  // }
  // const obj = { name: 'gopal' }
  // obj.__proto__ = 'sdlsdl'
  // console.log(obj, 'obj')

  let animal = {
    eats: true,
  }
  let rabbit = {
    jumps: true,
  }

  rabbit.__proto__ = animal // (*)

  // we can find both properties in rabbit now:
  console.log(rabbit.eats) // true (**)
  console.log(rabbit.jumps)
  return (
    <div>
      {/* <input onChange={changeHandler} type='text' />
      <button onClick={clickHandler}>Click</button> */}
    </div>
  )
}
