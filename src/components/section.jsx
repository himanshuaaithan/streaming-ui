import React from 'react'
import Navbar from './navbar'
import Aside from './aside'
import Movies from './movies'

const section = () => {
  return (
    <div className='h-screen w-screen absolute z-10 overflow-hidden '>
         <Navbar  />
         <Aside />
         <Movies />
    </div>
  )
}

export default section