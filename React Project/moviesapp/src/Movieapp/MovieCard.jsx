import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div>
      <div className='h-[60vh] w-[200px] m-[5] mt-5 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between ' 

    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      <div className=' text-xl w-full p-2 text-center bg-gray-900/60 '>
        {name}
      </div>

      </div>
    </div>
  )
}

export default MovieCard
