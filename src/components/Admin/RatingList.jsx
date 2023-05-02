import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

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
    <>
      <h1>Ratings List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rating) => (
            <tr key={rating.id}>
              <td>{rating.id}</td>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
              <td><Link to={`/ratings/${rating.id}`}>Edit</Link></td>
              <td><button onClick={() => deleteRatings(rating.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/ratings/new">Add Rating</Link>
    </>
  )
}

export default RatingList