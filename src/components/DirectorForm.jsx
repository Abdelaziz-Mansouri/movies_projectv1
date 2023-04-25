import React, { useState } from 'react';

const DirectorForm = ({ addDirector, editDirector, directorToEdit }) => {
  const [name, setName] = useState(directorToEdit ? directorToEdit.name : '');
  const [nationality, setNationality] = useState(directorToEdit ? directorToEdit.nationality : '');

  const handleSubmit = e => {
    e.preventDefault();
    if (directorToEdit) {
      editDirector({ id: directorToEdit.id, name, nationality });
    } else {
      addDirector({ name, nationality });
      setName('');
      setNationality('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Nationality:</label>
        <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} />
      </div>
      <button type="submit">{directorToEdit ? 'Edit Director' : 'Add Director'}</button>
    </form>
  );
}

export default DirectorForm;
