import React from 'react'
import GenrePicture from './GenrePicture'

const GenreGroup = () => {
    return (
        <div className='flex gap-[36px] -translate-x-[1000px]'>
            <GenrePicture />
            <GenrePicture />
            <GenrePicture />
        </div>
    )
}

export default GenreGroup