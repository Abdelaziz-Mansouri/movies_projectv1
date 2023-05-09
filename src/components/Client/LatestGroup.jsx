import React from 'react'
import LatestPicture from './LatestPicture'

const LatestGroup = () => {
    return (
        <div className='flex gap-[36px] -translate-x-[1000px]'>
            <LatestPicture />
            <LatestPicture />
            <LatestPicture />
        </div>
    )
}

export default LatestGroup