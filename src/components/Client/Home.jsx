import React, { useState } from 'react'
import '../../index.css'
import Header from './Header'
import MovieGroup from './MovieGroup'
import LatestGroup from './LatestGroup'
import GenreGroup from './GenreGroup'
import Footer from './Footer'

const Home = () => {
  const [propVal, setPropVal] = useState("");

  const handleClick = (event) => {
    setPropVal(event.target.textContent);
  };
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <LatestGroup/>
      <MovieGroup propVal={propVal}/>
      <GenreGroup propVal={propVal} handleClick={handleClick}/>
      <Footer/>
    </div>
    
  )
}

export default Home