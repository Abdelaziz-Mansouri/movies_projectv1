import React, { useState , useEffect } from 'react'
import axios from '../../api/axios';
import { useNavigate , useParams } from "react-router-dom";

const DirectorForm = () => {

  const navigate = useNavigate();

  const [director, setDirector] = useState({
    id : '',
    firstName : '',
    lastName : ''
  });
  const {id} = useParams();

  const handleInput = (e) => {
    const newdirector = { ...director }
    newdirector[e.target.id] = e.target.value
    setDirector(newdirector);
    console.log(newdirector);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!id){
      let response = await axios.post('/Directors/AddDirector', {id: director.id , firstName : director.firstName, lastName : director.lastName}).catch(err => console.log(err));
      console.log(JSON.stringify(response));
    }else{
      let response = await axios.put(`/Directors/UpdateDirector/${id}`, {id: director.id , firstName : director.firstName, lastName : director.lastName}).catch(err => console.log(err));
      console.log(JSON.stringify(response));
    }

    navigate('/directors')
  }
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        axios.get(`/Directors/GetById/${id}`)
          .then((response) => {
            setDirector(response.data)
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
      <h1>DirectorForm</h1>

      <form>
        <label htmlFor="">entrer le id du directeur</label>
        <input type="number" id='id' value={director.id} onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le prenom du directeur</label>
        <input type="text" id='firstName' value={director.firstName} onInput={(e) => {handleInput(e)}}/>
        <label htmlFor="">entrer le nom du directeur</label>
        <input type="text" id='lastName' value={director.lastName} onInput={(e) => {handleInput(e)}}/>
        <button onClick={(e) => {handleSubmit(e)}}>{!id ? 'Ajouter' : 'Update'}</button>
      </form>
    </>
  )
}

export default DirectorForm