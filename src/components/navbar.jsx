import React from 'react'
import{ useState } from "react";

const navbar = () => {
    let tags = ["DASHBOARD", "MOVIES", "SERIES", "KIDS"]

    let [hide, sethide] = useState(false)
    const [color, setcolor] = useState(" ")

    return (
        <div className='h-10vh w-screen px-10 py-5 flex justify-between'>
            <div className=' flex justify-between items-center py-3 px-2 rounded-full w-[35%]'>
                {tags.map((elem, idx) => {
                    return <h1 key={idx} className='text-white cursor-pointer text-[0.8rem]'>{elem}</h1>
                })}
            </div>

            <div className=' flex justify-between items-center gap-5'>
                <div onMouseEnter={() => {
                        sethide(true)
                        setcolor("bg-white/20")
                    
                }} onMouseLeave={()=>{
                        sethide(false)
                        setcolor("")
                    
                }} className={`rounded-2xl flex items-center justify-center px-1 transition-all duration-500 ${color}`}>
                    <input className={` text-white text-center ${hide ? "block" : "hidden"}`} style={{}}  type="text" placeholder=' Find movie' />
                    <span  className='text-white text-xl'><i class="ri-search-line"></i></span>
                </div>
                
                <div><img className='h-5 rounded-full' src="https://i.pinimg.com/1200x/18/f0/45/18f045b0936ab238ae827e9a0ee0b885.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default navbar