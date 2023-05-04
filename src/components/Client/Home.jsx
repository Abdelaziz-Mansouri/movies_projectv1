import React from 'react'
import '../../index.css'
import styles from '../../style'
import Header from './Header'
import MovieGroup from './MovieGroup'
import GenreGroup from './GenreGroup'

const Home = () => {
  return (
    <>
      <Header/>
      <GenreGroup/>
      <MovieGroup/>
    </>
    
  )
}

export default Home