import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import TableCadre from './TableCadre';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

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

      <TableCadre
        listName='Directors'
        addButton='Director'
        linkNew='/directors/new'
        head={
          <>
            <th>First Name</th>
            <th>Last Name</th>
          </>
        }
        body={
          <>
            {directors.map((director) => (
              <tr key={director.id} className='bg-secondary '>
                <td className='p-[20px]'>{director.firstName}</td>
                <td>{director.lastName}</td>
                <td className='text-white text-[18px] pl-[10px]'><Link to={`/directors/${director.id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
                <td className='text-white text-[18px] pl-[10px]'><button onClick={() => deleteDirector(director.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
              </tr>
            ))}
          </>
        }
      />

  )
}

export default DirectorList