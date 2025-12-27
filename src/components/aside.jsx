import React from 'react'

const aside = () => {
    return (
        <div className='h-30vh w-full px-10 py-5 mt-20' >
            <h1 className='text-white font-extrabold text-6xl uppercase'>raya and the <br /> last dragon</h1>
            <p className='text-[#838282] mt-5'>a disney original film  <span className='text-[#0cec08]'>98% match</span> <span className='text-white'>2021</span></p>

            <div className=' flex items-center gap-2 mt-5'>
                <button className='bg-[#7600FF] py-2 px-10 rounded-full text-white'>PLAY</button>
                <span className= 'h-6 w-6 flex justify-center items-center  border-2  rounded-full text-white'><i class="ri-add-large-line"></i></span>
            </div>
        </div>
    )
}

export default aside