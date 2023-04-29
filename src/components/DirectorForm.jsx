import React, { useState } from 'react'
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const DirectorForm = () => {

  const navigate = useNavigate();

  const [director, setDirector] = useState({
    id : '',
    firstName : '',
    lastName : ''
  });

  const handleInput = (e) => {
    const newdirector = { ...director }
    newdirector[e.target.id] = e.target.value
    setDirector(newdirector);
    console.log(newdirector);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let response = await axios.post('/Directors/AddDirector', {id: director.id , firstName : director.firstName, lastName : director.lastName}).catch(err => console.log(err));
    console.log(JSON.stringify(response));
    navigate('/directors')
  }

  return (
    <>
      <h1>DirectorForm</h1>

      <form>
        <label htmlFor="">entrer le id du directeur</label>
        <input type="number" id='id' onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le prenom du directeur</label>
        <input type="text" id='firstName' onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le nom du directeur</label>
        <input type="text" id='lastName' onInput={(e) => {handleInput(e)}}/>
        <button onClick={(e) => {handleSubmit(e)}}>Ajouter</button>
      </form>
    </>
  )
}

export default DirectorForm