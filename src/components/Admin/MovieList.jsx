import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';



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
      <h1>MovieList</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.nameGenre}</td>
              <td>{movie.lastName} {movie.fistName}</td>
              <td>{movie.nameRating}</td>
              <td><Link to={`/movies/${movie.id}`}>Edit</Link></td>
              <td><button onClick={() => deleteMovie(movie.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/movies/new">Add Movie</Link>
    </>
  )
}

export default MovieList