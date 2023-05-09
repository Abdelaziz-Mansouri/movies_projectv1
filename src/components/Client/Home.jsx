import React from 'react'
import '../../index.css'
import styles from '../../style'
import Header from './Header'
import MovieGroup from './MovieGroup'
import LatestGroup from './LatestGroup'
import GenreGroup from './GenreGroup'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <LatestGroup/>
      <MovieGroup/>
      <GenreGroup/>
      <Footer/>
    </div>
    
  )
}

export default Home