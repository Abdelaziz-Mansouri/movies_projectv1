import React from 'react'
import {Genre1} from '../../assets/genrePictures'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'

const MoviePicture = (props) => {
  return (
    <div className='w-[318px] h-[520px] rounded-[20px] bg-cover relative' style={{ backgroundImage: `url(${props.imageUrl})`}}>
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-primary from-1% to-transparent to-30%">
        <div className="rounded-full bg-primary w-[103px] h-[103px] opacity-80 absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]">
          <FontAwesomeIcon icon={faPlay} className='text-white absolute inset-y-[50%] left-[53%] w-[43px] h-[43px] -translate-x-[50%] -translate-y-[50%]' />
        </div>
        <div className="absolute inset-x-[17px] bottom-[24px] h-[55px] text-white">
          <h3 className='leading-[23px] font-extrabold text-[19px]'>{props.title}</h3>
          <div className='leading-[15px] mt-[7px] font-light text-[12px] flex gap-[30px]'><span>{props.nameGenre}</span><span>{props.releaseDate}</span><span>{props.nameRating}</span></div>
        </div>
      </div>
    </div>
  )
}

export default MoviePicture