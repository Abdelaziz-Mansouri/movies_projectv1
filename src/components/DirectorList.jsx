import React from 'react';

const DirectorList = ({ directors, deleteDirector }) => {
  return (
    <ul>
      {directors.map(director => (
        <li key={director.id}>
          {director.name} ({director.nationality})
          <button onClick={() => deleteDirector(director.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default DirectorList;
