import React, { useState } from 'react'
import axios from '../api/axios';

const GenreForm = () => {

  const [genre, setGenre] = useState({
    id : '',
    name : ''
  });

  const handleInput = (e) => {
    const nexGenre = { ...genre }
    nexGenre[e.target.id] = e.target.value
    setGenre(nexGenre);
    console.log(nexGenre);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let response = await axios.post('/Genres/AddGenre', {id: genre.id , name : genre.name}).catch(err => console.log(err));
    console.log(JSON.stringify(response));
  }

  return (
    <>
      <h1>GenreForm</h1>

      <form>
        <label htmlFor="">entrer le id du genre</label>
        <input type="number" id='id' onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le name du genre</label>
        <input type="text" id='name' onInput={(e) => {handleInput(e)}}/>
        <button onClick={(e) => {handleSubmit(e)}}>Ajouter</button>
      </form>
    
    </>
  )
}

export default GenreForm