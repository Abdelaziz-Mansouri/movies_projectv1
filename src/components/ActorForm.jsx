import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';

const ActorForm = () => {

    const navigate = useNavigate();

  const [actor, setActor] = useState({
    id : '',
    firstName : '',
    lastName : ''
  });

  const handleInput = (e) => {
    const newactor = { ...actor }
    newactor[e.target.id] = e.target.value
    setActor(newactor);
    console.log(newactor);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let response = await axios.post('/Actors/AddActor', {id: actor.id , firstName : actor.firstName, lastName : actor.lastName}).catch(err => console.log(err));
    console.log(JSON.stringify(response));
    navigate('/actors')
  }

  return (
    <>
      <h1>ActorForm</h1>

      <form>
        <label htmlFor="">entrer le id d'actor</label>
        <input type="number" id='id' onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le prenom d'actor</label>
        <input type="text" id='firstName' onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le nom d'actor</label>
        <input type="text" id='lastName' onInput={(e) => {handleInput(e)}}/>
        <button onClick={(e) => {handleSubmit(e)}}>Ajouter</button>
      </form>
    </>
  )
}

export default ActorForm