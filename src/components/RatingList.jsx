import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
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
  

  return (
    <>
      <h1>Ratings List</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rating) => (
            <tr key={rating.id}>
              <td>{rating.name}</td>
              <td>{rating.description}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <Link to="/ratings/new">Add Director</Link>
    </>
  )
}

export default RatingList