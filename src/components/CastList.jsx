import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom';

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
        <>
            <h1>CastList</h1>

            <table>
                <thead>
                    <tr>
                        <th>Character Name</th>
                        <th>Movie</th>
                        <th>Actor</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {casts.map(cast => (
                        <tr>
                            <td>{cast.characterName}</td>
                            <td>{cast.movieName}</td>
                            <td>{cast.actorName}</td>
                            <td><Link to={`/casts/${cast.id}`}>Edit</Link></td>
                            <td><button onClick={() => deleteCast(cast.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/actors/new">Add Actor</Link>
            
        </>
    )
}

export default CastList