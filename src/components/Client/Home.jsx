import React from 'react'
import '../../index.css'
import styles from '../../style'
import Header from './Header'
import MovieGroup from './MovieGroup'
import GenreGroup from './GenreGroup'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <GenreGroup/>
      <MovieGroup/>
      <div>
        
      </div>
    </div>
    
  )
}

export default Home