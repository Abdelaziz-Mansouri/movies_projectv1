import React, { useState, useEffect } from 'react'
import axios from '../../api/axios'
import { Link } from 'react-router-dom';

import TableCadre from './TableCadre';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const CastList = () => {

    const [casts, setCasts] = useState([]);


    useEffect(() => {
        axios.get('/Casts/GetAllInfo')
            .then(response => {
                setCasts(response.data);
                console.log(response);
            })
            .then(err => console.log(err))
    }, [])

    const deleteCast = (id) => {
        axios.delete(`/Casts/DeleteCast/${id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (

            <TableCadre
                listName='Casts'
                addButton='Cast'
                linkNew='/casts/new'
                head={
                    <>
                        <th>Character Name</th>
                        <th>Movie</th>
                        <th>Actor</th>
                    </>
                }
                body={
                    <>
                        {casts.map(cast => (
                        <tr key={cast.id} className='bg-secondary '>
                            <td className='p-[20px]'>{cast.characterName}</td>
                            <td>{cast.movieName}</td>
                            <td>{cast.actorName}</td>
                            <td><Link to={`/casts/${cast.id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
                            <td><button onClick={() => deleteCast(cast.id)}><FontAwesomeIcon icon={faCircleXmark} /></button></td>
                        </tr>
                    ))}
                    </>
                }
            />
    )
}

export default CastList