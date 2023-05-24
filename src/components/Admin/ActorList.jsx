import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import TableCadre from './TableCadre';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

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

      <TableCadre
        listName='Actors'
        addButton='Actor'
        linkNew='/actors/new'
        head={
          <>
            <th>First Name</th>
            <th>Last Name</th>
          </>
        }
        body={
          <>
            {actors.map((actor) => (
            <tr key={actor.id} className='bg-secondary '>
              <td className='p-[20px]'>{actor.firstName}</td>
              <td>{actor.lastName}</td>
              <td className='text-white text-[18px] pl-[10px]'><Link to={`/admin/actors/${actor.id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
              <td className='text-white text-[18px] pl-[10px]'><button onClick={() => deleteActor(actor.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
            </tr>
          ))}
          </>
        }
      />
  )
}

export default ActorList