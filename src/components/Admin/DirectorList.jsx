import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const DirectorList = () => {


  const [directors, setDirectors] = useState([])

  useEffect(() => {
    
    axios.get('/Directors/GetAllDirectorsWithoutMovies')
      .then((response) => {
        setDirectors(response.data);
        console.log(response);
      })
      .catch(err => console.log(err))
  
  }, [])
  
  const deleteDirector = (id) => {
    axios.delete(`/Directors/DeleteDirector/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <>
      <h1>Directors List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director) => (
            <tr key={director.id}>
              <td>{director.firstName}</td>
              <td>{director.lastName}</td>
              <td><Link to={`/directors/${director.id}`}>Edit</Link></td>
              <td><button onClick={() => deleteDirector(director.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/directors/new">Add Director</Link>
    </>
  )
}

export default DirectorList