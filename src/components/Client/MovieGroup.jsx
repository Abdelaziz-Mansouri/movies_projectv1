import React, { useState, useEffect, useRef } from 'react';
import axios from '../../api/axios';

import MoviePicture from './MoviePicture'
import styles from '../../style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

  const moviesContainer = useRef();

  const showMore = (e) => {
    if (e.target.textContent == 'Show more') {
      moviesContainer.current.style.height = 'auto';
      e.target.textContent = 'Show less';
    e.target.nextElementSibling.style.rotate = '180deg';

    }else{
      e.target.textContent = 'Show more';
      moviesContainer.current.style.height = '1160px';
    e.target.nextElementSibling.style.rotate = '0deg';

    }
  }


  return (
    <div className='my-[80px] mx-[220px]'>
      <div className="h-[69px] w-full bg-secondary rounded-[20px] flex items-center px-[33px]">
        <h1 className='font-semibold text-white text-[32px]'>Popular</h1>
      </div>
      <div className="flex mt-[73px] gap-[115px] justify-center flex-wrap h-[1160px] overflow-hidden" ref={moviesContainer}>
        {movies.map(movie =>(
          <MoviePicture title = {movie.title} nameGenre={movie.nameGenre} releaseDate={movie.releaseDate.slice(0,4)} nameRating={movie.nameRating}/>
        ))}
      </div>
      <div className={movies.length > 6 ? 'flex justify-center mt-[45px]' : 'hidden'}>
        <button className={styles.btnPrimary}><span onClick={showMore}>Show more</span> <FontAwesomeIcon icon={faChevronDown} /></button>
      </div>
    </div>
  )
}

export default MovieGroup