import React from 'react';

const RatingList = ({ ratings, deleteRating, editRating }) => {
  return (
    <ul>
      {ratings.map(rating => (
        <li key={rating.id}>
          Score: {rating.score}
          <button onClick={() => editRating(rating)}>Edit</button>
          <button onClick={() => deleteRating(rating.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default RatingList;
