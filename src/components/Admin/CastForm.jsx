import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from '../../style';
import axios from '../../api/axios';

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
      response = await axios.put('/Casts/UpdateCast/'+id, {id: cast.id, characterName: cast.characterName, movieId: cast.movieId, actorId: cast.actorId }).catch(err => console.log(err));
    }else{
      response = await axios.post('/Casts/AddCast', { id: cast.id, characterName: cast.characterName, movieId: cast.movieId, actorId: cast.actorId  }).catch(err => console.log(err));
    }
    console.log(JSON.stringify(response));
    navigate('/admin/casts')
  }

  return (
    <>
      <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>Add Cast</h1>

      <form className="flex flex-wrap gap-[18px] w-[80%] justify-center">
        <input className={styles.input + ' w-full'} placeholder='Id' type="number" id='id' value={cast.id} onInput={(e) => { handleInput(e) }} />
        <input className={styles.input + ' w-full'} placeholder='Character Name' type="text" id='characterName' value={cast.characterName} onInput={(e) => { handleInput(e) }} />
        <select className={styles.input + ' w-full'} placeholder='Movie' name="" id="movieId" value={cast.movieId}  onInput={(e) => { handleInput(e) }}>
          {movies.map(movie => (<option value={movie.id} key={movie.id}>{movie.title}</option>))}
        </select>
        <select className={styles.input + ' w-full'} placeholder='Actor' name="" id="actorId" value={cast.actorId} onInput={(e) => { handleInput(e) }}>
          {actors.map(actor => (<option value={actor.id} key={actor.id}>{actor.firstName + actor.lastName}</option>))}
        </select>
        <div className="w-full flex justify-center gap-[18px]">

        <button className={styles.btnPrimary + ' w-[20%]'} onClick={(e) => { handleSubmit(e) }}>{id ? 'Modifier' : 'Ajouter'}</button>
          <Link to='/admin/casts' className={styles.btnSecondary + ' w-[20%]'}>Ignore</Link>
        </div>
      </form>
    </>
  )
}

export default CastForm