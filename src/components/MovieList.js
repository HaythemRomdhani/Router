import React from 'react'
import MovieCard from './MovieCard'
function MovieList({movies}) {

    return (
        <div style={{alignItems:"flex-end",flexWrap:"wrap"}}>
          
         {movies.map((movie,index) => <MovieCard movie={movie} id={index} /> )}
        </div>
    )
}

export default MovieList
