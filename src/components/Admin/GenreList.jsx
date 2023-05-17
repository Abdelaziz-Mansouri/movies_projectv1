import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import TableCadre from './TableCadre';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'

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
    <TableCadre
      listName='Genre'
      addButton='Genre'
      linkNew='/genres/new'
      head={
        <>
          <th>Genre</th>
        </>
      }
      image={true}
      body={
        <>
          {genres.map((genre) => (
            <tr key={genre.id} className='bg-secondary '>
              <td className='p-[20px]'>{genre.name}</td>
              <td className='text-white text-[18px] pl-[10px]'><Link to={`/genres/${genre.id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
              <td className='text-white text-[18px] pl-[10px]'><button onClick={() => deleteGenre(genre.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
              <td className='text-white text-[18px] pl-[10px]'><Link ><FontAwesomeIcon icon={faImages} /></Link></td>
            </tr>
          ))}
        </>
      }
    />
  )
}

export default GenreList