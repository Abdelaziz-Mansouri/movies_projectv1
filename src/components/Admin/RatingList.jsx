import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

import TableCadre from './TableCadre';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const RatingList = () => {


  const [ratings, setRatings] = useState([])

  useEffect(() => {
    
    axios.get('/Ratings/GetAllRating')
      .then((response) => {
        setRatings(response.data);
        console.log(response);
      })
      .catch(err => console.log(err))
  
  }, [])
  const deleteRatings = (id) => {
    axios.delete(`/Ratings/DeleteRating/${id}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}
  

  return (

      <TableCadre
        listName='Ratings'
        addButton='Rating'
        linkNew='/ratings/new'
        head={
          <>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </>
        }
        body={
          <>
            {ratings.map((rating) => (
            <tr key={rating.id} className='bg-secondary '>
              <td className='p-[20px]'>{rating.id}</td>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
              <td className='text-white text-[18px] pl-[10px]'><Link to={`/ratings/${rating.id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
              <td className='text-white text-[18px] pl-[10px]'><button onClick={() => deleteRatings(rating.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
            </tr>
          ))}
          </>
        }
      />
  )
}

export default RatingList