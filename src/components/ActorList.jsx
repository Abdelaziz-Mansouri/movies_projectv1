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
  
  const deleteActor = (id) => {
    axios.delete(`/Actors/DeleteActor/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Actors List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.id}>
              <td>{actor.firstName}</td>
              <td>{actor.lastName}</td>
              <td><Link to={`/actors/${actor.id}`}>Edit</Link></td>
              <td><button onClick={() => deleteActor(actor.id)}>Delete</button></td>
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