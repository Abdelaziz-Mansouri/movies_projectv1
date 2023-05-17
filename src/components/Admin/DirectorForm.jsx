import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from '../../style';

const DirectorForm = () => {

  const navigate = useNavigate();

  const [director, setDirector] = useState({
    id: '',
    firstName: '',
    lastName: ''
  });
  const { id } = useParams();

  const handleInput = (e) => {
    const newdirector = { ...director }
    newdirector[e.target.id] = e.target.value
    setDirector(newdirector);
    console.log(newdirector);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      let response = await axios.post('/Directors/AddDirector', { id: director.id, firstName: director.firstName, lastName: director.lastName }).catch(err => console.log(err));
      console.log(JSON.stringify(response));
    } else {
      let response = await axios.put(`/Directors/UpdateDirector/${id}`, { id: director.id, firstName: director.firstName, lastName: director.lastName }).catch(err => console.log(err));
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
      <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>Add Director</h1>

      <form className="flex flex-wrap gap-[18px] w-[80%] justify-center">
        <input className={styles.input + ' w-full'} placeholder='Id' type="number" id='id' value={director.id} onInput={(e) => { handleInput(e) }} />
        <input className={styles.input + ' w-full'} placeholder='First Name' type="text" id='firstName' value={director.firstName} onInput={(e) => { handleInput(e) }} />
        <input className={styles.input + ' w-full'} placeholder='Last Name' type="text" id='lastName' value={director.lastName} onInput={(e) => { handleInput(e) }} />
        <div className="w-full flex justify-center gap-[18px]">
          <button className={styles.btnPrimary + ' w-[20%]'} onClick={(e) => { handleSubmit(e) }}>{!id ? 'Ajouter' : 'Update'}</button>
          <Link to='/directors' className={styles.btnSecondary + ' w-[20%]'}>Ignore</Link>
        </div>
      </form>
    </>
  )
}

export default DirectorForm