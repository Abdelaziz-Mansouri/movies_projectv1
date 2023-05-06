import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

import MoviePicture from './MoviePicture'

const MovieGroup = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/Movies/CustomerGet')
      .then(response => {
        setMovies(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    
  }, []);


  return (
    <div className='my-[80px] mx-[220px]'>
      <div className="h-[69px] w-full bg-secondary rounded-[20px] flex items-center px-[33px]">
        <h1 className='font-semibold text-white text-[32px]'>Popular</h1>
      </div>
      <div className="flex mt-[73px] gap-[115px] justify-center flex-wrap">
        {movies.map(movie =>(
          <MoviePicture title = {movie.title} nameGenre={movie.nameGenre} releaseDate={movie.releaseDate.slice(0,4)} nameRating={movie.nameRating}/>
        ))}
      </div>
    </div>
  )
}

export default MovieGroup