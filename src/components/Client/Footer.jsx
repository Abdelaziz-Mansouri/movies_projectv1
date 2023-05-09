import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[558px] w-full bg-[#282727] text-white mt-[92px] p-[63px] relative'>
        <div className="flex items-center">
            <div className="rounded-full bg-primary w-[100px] h-[100px] my-[29px] mr-[17px]"></div>
            <h1 className='text-[32px]'>LOGO</h1>
        </div>


        <div className="absolute inset-x-0 bottom-0 h-[75px] flex items-center justify-center leading-[38px] text-[31px] font-light border-t">All Right Reserved 2023</div>
    </footer>
  )
}

export default Footer