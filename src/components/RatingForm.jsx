import React, { useState } from 'react';

const RatingForm = ({ addRating, editRating, ratingToEdit }) => {
  const [score, setScore] = useState(ratingToEdit ? ratingToEdit.score : '');

  const handleSubmit = e => {
    e.preventDefault();
    if (ratingToEdit) {
      editRating({ id: ratingToEdit.id, score });
    } else {
      addRating({ score });
      setScore('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Score:</label>
        <input type="number" min="1" max="10" value={score} onChange={e => setScore(e.target.value)} />
      </div>
      <button type="submit">{ratingToEdit ? 'Edit Rating' : 'Add Rating'}</button>
    </form>
  );
}

export default RatingForm;
