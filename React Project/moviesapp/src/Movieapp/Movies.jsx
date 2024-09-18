import React from 'react'
import MovieCard from './MovieCard'
function Movies() {
  return (
    <div className='p-3'>
      <div className='text-center w-full font-bold m-3'>
          Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
       
      </div>
    </div>
  )
}

export default Movies
