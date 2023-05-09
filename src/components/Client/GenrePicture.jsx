import React from 'react'
import {Genre1} from './../../assets/genrePictures'

const GenrePicture = (props) => {
  return (
    <div className='min-w-[273px] h-[356px] bg-cover rounded-[20px] flex flex-col justify-end pb-[45px]' style={{ backgroundImage: `url(${Genre1})`}}>
      <h2 className='text-white text-center font-bold text-[31px] leading-[38px] '>{props.name}</h2>
    </div>
  )
}

export default GenrePicture