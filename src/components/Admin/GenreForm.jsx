import React, { useState , useEffect } from 'react'
import axios from '../../api/axios';
import { useNavigate, useParams } from "react-router-dom";

const GenreForm = () => {

  const navigate = useNavigate();

  const [genre, setGenre] = useState({
    id : '',
    name : ''
  });
  const { id }= useParams();
  const handleInput = (e) => {
    const nexGenre = { ...genre }
    nexGenre[e.target.id] = e.target.value
    setGenre(nexGenre);
    console.log(nexGenre);
  }
  console.log(id);

  const handleSubmit = async(e) => {

    e.preventDefault();
    if(!id){
      const response = await axios.post('/Genres/AddGenre', {id: genre.id , name : genre.name}).catch(err => console.log(err));
     console.log(JSON.stringify(response));

    }else{
      const response = await axios.put(`/Genres/UpdateGenre/${id}`, {id: genre.id , name : genre.name}).catch(err => console.log(err));
      console.log(JSON.stringify(response)); 
    }
    navigate('/genres')
    
  }
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        axios.get(`/Genres/${id}`)
          .then((response) => {
            setGenre(response.data)
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
      }
      fetchData();
    }
  }, [id])

  return (
    <>
      <h1>GenreForm</h1>

      <form>
        <label htmlFor="">entrer le id du genre</label>
        <input type="number" id='id' value={genre.id} onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le name du genre</label>
        <input type="text" value={genre.name} id='name' onInput={(e) => {handleInput(e)}}/>
        <button onClick={(e) => {handleSubmit(e)}}>{!id ? 'Ajouter' : 'Update'}</button>
      </form>
    
    </>
  )
}

export default GenreForm