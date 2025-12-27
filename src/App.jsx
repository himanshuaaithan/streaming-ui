import React from 'react'
import { useState } from "react";
import Hero from './components/hero'
import Section from './components/section'
import Cursor from './components/cursor'

const App = () => {
  
const [pop, setpop] = useState({x:0 ,y:0})
  return (
    <div onMouseMove={(e)=>{
      setpop({
        x: e.clientX,
        y: e.clientY, 
    })
    }} className='h-screen w-screen bg-black bg-cover' style={{backgroundImage:'url("public/imgs/main2.png")'}}>
      <Section />
      <Hero />
      <Cursor x={pop.x} y={pop.y} />
    </div>
  )
}

export default App