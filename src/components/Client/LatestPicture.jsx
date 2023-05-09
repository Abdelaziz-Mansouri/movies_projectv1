import React from 'react'
import { Genre1 } from '../../assets/genrePictures'

const LatestPicture = () => {
  return (
    <div className='bg-cover h-[436px] min-w-[1174px] rounded-[24px] relative' style={{ backgroundImage: `url(${Genre1})`}}>
        <div className="w-[calc(100%-36px)] h-[123px] absolute bottom-[21px] left-[18px] rounded-[24px] backdrop-blur-sm px-[33px] py-[23px]">
            <h1 className='font-extrabold text-white text-[42px] leading-[51px]'>Genre Title</h1>
            <p className='font-light text-white text-[24px] leading-[29px]'>Genre Info</p>
        </div>
    </div>
  )
}

export default LatestPicture