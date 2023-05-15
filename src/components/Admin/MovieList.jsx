import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {faImages} from '@fortawesome/free-solid-svg-icons'

import styles from '../../style.js'



const MovieList = () => {

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
  
  const deleteMovie = (id) => {
    axios.delete(`/Movies/DeleteMovie/${id}`)
      .then(response => {
        console.log(response);
        // window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
    <div className="mt-[70px] flex justify-between">
      <h1 className='font-bold text-[33px] leading-[40px] relative -left-[20px]'>Movies List</h1>
      <Link className={styles.btnPrimary + ' w-[300px]'} to="/movies/new">Add Movie</Link>
    </div>

      <table className='w-[1030px] border-separate border-spacing-y-[13px] text-left'>
        <thead className='text-[20px]'>
          <tr>
            <th className='p-[10px]'>Title</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>EditImage</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id} className='bg-secondary '>
              <td className='p-[20px]'>{movie.title}</td>
              <td>{movie.releaseDate.slice(0,10)}</td>
              <td>{movie.nameGenre}</td>
              <td>{movie.lastName} {movie.fistName}</td>
              <td>{movie.nameRating}</td>
              <td className='text-white text-[18px] pl-[10px]'><Link to={`/movies/${movie.id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
              <td className='text-white text-[18px] pl-[10px]'><button onClick={() => deleteMovie(movie.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
              <td className='text-white text-[18px] pl-[10px]'><Link to={`/updateImage/${movie.id}`}><FontAwesomeIcon icon={faImages} /></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MovieList