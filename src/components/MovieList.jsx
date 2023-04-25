import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
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
              <td>{movie.release_date}</td>
              <td>{movie.genre_name}</td>
              <td>{movie.director_name}</td>
              <td>{movie.rating_name}</td>
              <td><Link to={`/movies/${movie.id}`}>Edit</Link></td>
              <td><button onClick={() => deleteMovie(movie.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/movies/new">Add Movie</Link>
    </div>
  );
}

function deleteMovie(id) {
  axios.delete(`http://localhost:5000/movies/${id}`)
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
}

export default MovieList;