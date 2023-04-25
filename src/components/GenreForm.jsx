import React, { useState } from 'react';

const GenreForm = ({ addGenre, editGenre, genreToEdit }) => {
  const [name, setName] = useState(genreToEdit ? genreToEdit.name : '');

  const handleSubmit = e => {
    e.preventDefault();
    if (genreToEdit) {
      editGenre({ id: genreToEdit.id, name });
    } else {
      addGenre({ name });
      setName('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <button type="submit">{genreToEdit ? 'Edit Genre' : 'Add Genre'}</button>
    </form>
  );
}

export default GenreForm;
