import React from 'react'

const movies = () => {
    let moviesName = [
        {
            image: 'public/imgs/movie1.jpg',
            name: "dora"
        },
        {
            image: 'public/imgs/movie2.jpg',
            name: "superman"
        },
        {
            image: 'public/imgs/movie3.jpg',
            name: "batman"
        },
        {
            image: 'public/imgs/movie4.jpg',
            name: "game of thrones"
        },
        {
            image: 'public/imgs/movie5.jpg',
            name: "the boys"
        },
        {
            image: 'public/imgs/movie6.jpg',
            name: "braking bad"
        },
        {
            image: 'public/imgs/movie7.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie8.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie9.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie10.jpg',
            name: " "
        },

        {
            image: 'public/imgs/movie11.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie12.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie13.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie14.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie15.jpg',
            name: " "
        },
        {
            image: 'public/imgs/movie16.jpg',
            name: " "
        }

    ]
    return (
        <div className='h-55 w-full mt-3 bg-gradient-to-b from-white/0 via-transparent to-black'>
            <div>
                <h1 className='ml-10 text-white font-bold'>MY LIST</h1>
            </div>

            <div className='h-50 w-[97%] ml-10  flex  gap-3 overflow-hidden overflow-x-auto no-scrollbar ' >
                {moviesName.map((img) => {
                    return <div className=' shrink-0'>
                        <img className='h-40 border-2 rounded-xl     border-white' src={img.image} alt="" />
                    </div>
                })}
            </div>

        </div>
    )
}

export default movies
