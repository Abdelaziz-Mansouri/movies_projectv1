import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from '../../style';

const GenreForm = () => {

  const navigate = useNavigate();

  const [genre, setGenre] = useState({
    id: '',
    name: ''
  });
  const { id } = useParams();
  const handleInput = (e) => {
    const nexGenre = { ...genre }
    nexGenre[e.target.id] = e.target.value
    setGenre(nexGenre);
    console.log(nexGenre);
  }
  console.log(id);

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!id) {
      const response = await axios.post('/Genres/AddGenre', { id: genre.id, name: genre.name }).catch(err => console.log(err));
      console.log(JSON.stringify(response));

    } else {
      const response = await axios.put(`/Genres/UpdateGenre/${id}`, { id: genre.id, name: genre.name }).catch(err => console.log(err));
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
      <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>GenreForm</h1>

      <form className="flex flex-wrap gap-[18px] w-[80%] justify-center">
        <div className="flex w-full gap-[18px]">
          <input placeholder='Id' className={styles.input + ' w-full'} type="number" id='id' value={genre.id} onInput={(e) => { handleInput(e) }} />
          <input placeholder='Genre name' className={styles.input + ' w-full'} type="text" value={genre.name} id='name' onInput={(e) => { handleInput(e) }} />
        </div>
        <div className="flex justify-center w-full gap-[18px]">
          <button className={styles.btnPrimary + ' w-full'} onClick={(e) => { handleSubmit(e) }}>{!id ? 'Ajouter' : 'Update'}</button>
          <Link to='/admin/genres' className={styles.btnSecondary + ' w-full'}>Ignore</Link>
        </div>
      </form>

    </>
  )
}

export default GenreForm