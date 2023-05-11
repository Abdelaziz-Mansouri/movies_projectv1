import React, { useState, useEffect, useRef } from 'react';
import axios from '../../api/axios';

import MoviePicture from './MoviePicture'
import styles from '../../style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import years from '../../api/years';

const MovieGroup = () => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('/Movies/CustomerGet')
      .then(response => {
        setMovies(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('/Genres')
      .then((response) => {
        setGenres(response.data);
        console.log(response);
      })
      .catch(err => console.log(err))

  }, []);

  const moviesContainer = useRef();

  const showMore = (e) => {
    if (e.target.textContent == 'Show more') {
      moviesContainer.current.style.maxHeight = 'none';
      e.target.textContent = 'Show less';
      e.target.nextElementSibling.style.rotate = '180deg';

    } else {
      e.target.textContent = 'Show more';
      moviesContainer.current.style.maxHeight = '1160px';
      e.target.nextElementSibling.style.rotate = '0deg';

    }
  }

  const [selectedOption, setSelectedOption] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const filterData = () => {
    if (selectedOption == "All") {
      return movies;
    } else {
      return movies.filter((item) => item.nameGenre == selectedOption);
    }
  };

  const filteredData = filterData();

  const handleChangeYear = (e) => {
    setSelectedYear(e.target.value);
  }

  const filterYear = () => {
    if (selectedYear == "All") {
      return filteredData;
    } else {
      return filteredData.filter((item) => item.releaseDate.slice(0, 4) == selectedYear);
    }
  };

  const filteredYear = filterYear();


  return (
    <div className='my-[80px] mx-[220px]'>
      <div className="h-[69px] w-full bg-secondary rounded-[20px] flex items-center px-[33px] justify-between">
        <h1 className='font-semibold text-white text-[32px]'>Popular</h1>
        <div className="relative inline-flex gap-[8px]">
          <select onChange={handleChangeYear} className="appearance-none bg-primary text-white border rounded-[10px] px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-gray-500">
            <option value='All' className='bg-[#4F4F4F]'>By Year</option>
            {years.years.map(year => (
              <option className='bg-[#4F4F4F]'>{year}</option>
            ))}
          </select>
          <select onChange={handleChange} className="appearance-none bg-primary text-white border rounded-[10px] px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-gray-500">
            <option value='All' className='bg-[#4F4F4F]'>By Genre</option>
            {genres.map(genre => (
              <option className='bg-[#4F4F4F]'>{genre.name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4"></path></svg>
          </div>
        </div>

      </div>
      <div className="flex mt-[73px] gap-[115px] justify-center flex-wrap max-h-[1160px] overflow-hidden" ref={moviesContainer}>
        {filteredYear.map(movie => (
          <MoviePicture key={movie.id} id={movie.id} title={movie.title} nameGenre={movie.nameGenre} releaseDate={movie.releaseDate.slice(0, 4)} nameRating={movie.nameRating} />
        ))}
      </div>
      <div className={filteredYear.length > 6 ? 'flex justify-center mt-[45px]' : 'hidden'}>
        <button className={styles.btnPrimary}><span onClick={showMore}>Show more</span> <FontAwesomeIcon icon={faChevronDown} /></button>
      </div>
    </div>
  )
}

export default MovieGroup