import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const ActorList = () => {


  const [actors, setActors] = useState([])

  useEffect(() => {
    
    axios.get('/Actors/GetAllActors')
      .then((response) => {
        setActors(response.data);
        console.log(response);
      })
      .catch(err => console.log(err))
  
  }, [])
  

  return (
    <>
      <h1>Actors List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.id}>
              <td>{actor.firstName}</td>
              <td>{actor.lastName}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <Link to="/actors/new">Add Actor</Link>
    </>
  )
}

export default ActorList