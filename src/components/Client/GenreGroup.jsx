import React, { useState, useEffect } from 'react'
import GenrePicture from './GenrePicture'
import axios from '../../api/axios';
import styles from '../../style'

const GenreGroup = ({propVal,handleClick}) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get('/Genres')
      .then((response) => {
        setGenres(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  const [showAll, setShowAll] = useState(false)

  const handleAllCat = () => {
    setShowAll(true);
  }

  return (
    <div className='flex gap-[15px] overflow-hidden h-[436px] items-center relative'>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary from-30% to-transparent to-50% flex flex-col justify-center">
        <div className="text-white w-[350px] flex flex-col gap-[20px] ml-[50px]">
          <h1 className='font-extrabold text-[44px] leading-[53px]'>Brows Movies by categories</h1>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
          <button onClick={handleAllCat} className={styles.btnPrimary + ' w-fit'}>ALL Categories</button>
        </div>
      </div>
      <div onClick={() => {
        setShowAll(false)
      }} className={ !showAll ? "flex gap-[15px] animate-scroll -z-10" : "fixed inset-0 flex gap-[15px] flex-wrap bg-white z-10 justify-center items-center" }>
        {genres.map((genre) => (
          <GenrePicture onClick={handleClick} name={genre.name} />
        ))}
        {!showAll ? genres.map((genre) => (
          <GenrePicture name={genre.name} />
        )) : null}
      </div>

    </div>
  )
}

export default GenreGroup