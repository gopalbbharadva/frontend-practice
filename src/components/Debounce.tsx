import React from 'react'

export const Debounce = () => {
  const makeAnApiCall = () => {
    // console.log('object')
  }

  const debounce = (cb: any, limit: any) => {
    let timer = 0
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        cb()
      }, limit)
    }
  }

  const handleSearch = debounce(makeAnApiCall, 500)

  return (
    <div>
      <input
        onChange={handleSearch}
        type='text'
        placeholder='Enter text here'
      />
    </div>
  )
}
