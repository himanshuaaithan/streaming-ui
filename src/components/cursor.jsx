import React from 'react'


const cursor = ({x,y}) => {
console.log(x,y)
  
  return (
    <div  className='fixed z-30 h-5 w-5  rounded-full  bg-black/50 ' style={{ left:x , top:y}}> 
    </div>
  )
}

export default cursor