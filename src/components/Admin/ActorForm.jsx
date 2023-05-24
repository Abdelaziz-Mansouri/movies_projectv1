import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from '../../style';
import axios from '../../api/axios';

const ActorForm = () => {

  const navigate = useNavigate();

  const { id } = useParams();


  const [actor, setActor] = useState({
    id: '',
    firstName: '',
    lastName: ''
  });


  useEffect(() => {
    if (id) {
      axios.get('/Actors/GetById/' + id)
        .then((response) => {
          setActor(response.data);
          console.log(response);
        })
        .catch(err => console.log(err))
    }

  }, [])


  const handleInput = (e) => {
    const newactor = { ...actor }
    newactor[e.target.id] = e.target.value
    setActor(newactor);
    console.log(newactor);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if(id){  
      response = await axios.put('/Actors/UpdateActor/'+id, { firstName: actor.firstName, lastName: actor.lastName }).catch(err => console.log(err));
    }else{
      response = await axios.post('/Actors/AddActor', { id: actor.id, firstName: actor.firstName, lastName: actor.lastName }).catch(err => console.log(err));
    }
    console.log(JSON.stringify(response));
    navigate('/actors')
  }

  return (
    <>
      <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>Add Actor</h1>

      <form className="flex flex-wrap gap-[18px] w-[80%] justify-center">
        <input className={styles.input + ' w-full'} placeholder='Id' type="number" id='id' value={actor.id} onInput={(e) => { handleInput(e) }} />
        <input className={styles.input + ' w-full'} placeholder='First Name' type="text" id='firstName' value={actor.firstName} onInput={(e) => { handleInput(e) }} />
        <input className={styles.input + ' w-full'} placeholder='Last Name' type="text" id='lastName' value={actor.lastName} onInput={(e) => { handleInput(e) }} />
        <div className="w-full flex justify-center gap-[18px]">
          <button className={styles.btnPrimary + ' w-[20%]'} onClick={(e) => { handleSubmit(e) }}>{!id ? 'Ajouter' : 'Update'}</button>
          <Link to='/admin/actors' className={styles.btnSecondary + ' w-[20%]'}>Ignore</Link>
        </div>
      </form>
    </>
  )
}

export default ActorForm