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
    <div>DirectorForm</div>
  )
}

export default DirectorForm