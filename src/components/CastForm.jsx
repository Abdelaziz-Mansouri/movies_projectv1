import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from '../api/axios';

const CastForm = () => {

  const navigate = useNavigate();

  const { id } = useParams();


  const [cast, setCast] = useState({
    id: '',
    characterName: '',
    movieId: '',
    actorId: ''
  });

  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    if (id) {
      axios.get('/Casts/GetById/' + id)
        .then((response) => {
          setCast(response.data);
          console.log(response);
        })
        .catch(err => console.log(err))
    }

    axios.get('/Actors/GetAllActors')
      .then((response) => {
        setActors(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err))

    axios.get('/Movies/CustomerGet')
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err))

  }, [])


  const handleInput = (e) => {
    // const newcast = { ...cast }
    // newcast[e.target.id] = e.target.value
    // console.log(e.target.value);
    // setCast(newcast);
    // console.log(newcast);

    setCast({...cast, [e.target.id] : e.target.value})
    console.log(cast);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if(id){  
      response = await axios.put('/Casts/UpdateCast/'+id, { characterName: cast.characterName, movieId: cast.movieId, actorId: cast.actorId }).catch(err => console.log(err));
    }else{
      response = await axios.post('/Casts/AddCast', { id: cast.id, characterName: cast.characterName, movieId: cast.movieId, actorId: cast.actorId  }).catch(err => console.log(err));
    }
    console.log(JSON.stringify(response));
    // navigate('/casts')
  }

  return (
    <>
      <h1>CastForm</h1>

      <form>
        <label htmlFor="">entrer le id de cast</label>
        <input type="number" id='id' value={cast.id} onInput={(e) => { handleInput(e) }} />
        <label htmlFor="">entrer le nom de character</label>
        <input type="text" id='characterName' value={cast.characterName} onInput={(e) => { handleInput(e) }} />
        <label htmlFor="">select movie</label>
        <select name="" id="movieId" value={cast.movieId}  onInput={(e) => { handleInput(e) }}>
          {movies.map(movie => (<option value={movie.id} key={movie.id}>{movie.title}</option>))}
        </select>
        <label htmlFor="">select actor</label>
        <select name="" id="actorId" value={cast.actorId} onInput={(e) => { handleInput(e) }}>
          {actors.map(actor => (<option value={actor.id} key={actor.id}>{actor.firstName + actor.lastName}</option>))}
        </select>
        <button onClick={(e) => { handleSubmit(e) }}>{id ? 'Modifier' : 'Ajouter'}</button>
      </form>
    </>
  )
}

export default CastForm