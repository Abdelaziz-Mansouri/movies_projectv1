import React from 'react';

const GenreList = ({ genres, deleteGenre, editGenre }) => {
  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>
          {genre.name}
          <button onClick={() => editGenre(genre)}>Edit</button>
          <button onClick={() => deleteGenre(genre.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
