import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='spinner'></div>
      <div className='text-bgDark font-semibold text-lg'>Loading...</div>
    </div>
  )
}

export default Spinner