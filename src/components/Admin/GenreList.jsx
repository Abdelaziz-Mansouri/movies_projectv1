import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const GenreList = () => {


  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get('/Genres')
      .then((response) => {
        setGenres(response.data);
        console.log(response);
      })
      .catch(err => console.log(err))
  },[])

    
  const deleteGenre = (id) => {
    axios.delete(`/Genres/DeleteGenre/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <>
      <h1>Genres List</h1>
      <table>
        <thead>
          <tr>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id}>
              <td>{genre.name}</td>
              <td><Link to={`/genres/${genre.id}`}>Edit</Link></td>
              <td><button onClick={() => deleteGenre(genre.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/genres/new">Add Genre</Link>
    </>
  )
}

export default GenreList