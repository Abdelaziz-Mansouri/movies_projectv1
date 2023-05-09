import React, { useState, useEffect } from 'react'
import GenrePicture from './GenrePicture'
import axios from '../../api/axios';
import styles from '../../style'

const GenreGroup = () => {
    const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get('/Genres')
      .then((response) => {
        setGenres(response.data);
        console.log(response);
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className='flex gap-[15px] overflow-hidden h-[436px] items-center relative'>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary from-30% to-transparent to-50% flex flex-col justify-center">
            <div className="text-white w-[350px] flex flex-col gap-[20px] ml-[50px]">
                <h1 className='font-extrabold text-[44px] leading-[53px]'>Brows Movies by categories</h1>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                <button className={styles.btnPrimary + ' w-fit'}>ALL Categories</button>
            </div>
        </div>
        <div className="flex gap-[15px] animate-scroll -z-10">
        {genres.map((genre) => (
            <GenrePicture name = {genre.name}/>
        ))}
        {genres.map((genre) => (
            <GenrePicture name = {genre.name}/>
        ))}
        </div>
        
    </div>
  )
}

export default GenreGroup