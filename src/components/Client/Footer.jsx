import React, { useState, useEffect } from 'react'
import GenrePicture from './GenrePicture'
import axios from '../../api/axios';
import { facebook, instagram, twitter, youtube } from './../../assets/icons'

const Footer = () => {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        axios.get('/Genres')
            .then((response) => {
                setGenres(response.data);
                console.log(response);
            })
            .catch(err => console.log(err))
    }, [])

    const iconat = [facebook, instagram, twitter, youtube]

    return (
        <footer className='h-[558px] w-full bg-[#282727] text-white mt-[92px] px-[63px] pt-[25px] relative'>
            <div className="flex gap-[15%]">
                <div className="">
                    <div className="flex items-center">
                        <div className="rounded-full bg-primary w-[100px] h-[100px] my-[29px] mr-[17px]"></div>
                        <h1 className='text-[32px]'>LOGO</h1>
                    </div>
                    <p className='text-[26px] leading-[31px] py-[16px] w-[514px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex gap-[18px] mt-[19px]">
                        {iconat.map((icona) => (
                            <div className="bg-white w-[48px] h-[48px] rounded-full text-blue-50 flex items-center justify-center">
                                <img src={icona} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className='text-[31px] font-bold'>Categories</h2>
                    <div className="flex flex-col flex-wrap gap-x-20 h-[200px]">
                        {genres.map((genre) => (
                            <p className='text-[31px] font-light'>{genre.name}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[75px] flex items-center justify-center leading-[38px] text-[31px] font-light border-t">All Right Reserved 2023</div>
        </footer>
    )
}

export default Footer