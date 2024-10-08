import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
function Movies() {

  const [movie, setmovie]=useState([])

    useEffect(()=>{
       axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=f29a0bf71ce5e0a48e5ee50169ad6dd9&language=en-US&page=1')
.then(function(res){
          setmovie(res.data.results);
          
        }, [])
    })
  return (
    <div className='p-3'>
      <div className='text-center w-full font-bold m-3'>
          Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-5'>
        {/* <MovieCard/> */}

        {movie.map((movieObj)=>{
          return<MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
        })}
        
       
      </div>
    </div>
  )
}

export default Movies
