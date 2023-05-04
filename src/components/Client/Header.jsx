import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import styles from '../../style';

const Header = () => {
  return (
    <header className='h-[160px] w-full flex justify-around items-center'>
        <div className="flex items-center">
            <div className="rounded-full bg-primary w-[100px] h-[100px] my-[29px] mr-[17px]"></div>
            <h1 className='text-[32px]'>LOGO</h1>
        </div>
        <div className='bg-[#D9D9D9] rounded-[32px] w-[400px] h-[64px] relative'>
            <input type="text" className='bg-transparent absolute left-[30px] top-[10px] text-[16px] h-[44px] w-[300px] outline-none placeholder-black' placeholder='Search for...'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[32px] absolute right-[16px] top-[16px] text-primary'/>
        </div>
        <button className={styles.btnPrimary + ' h-[64px]'}>Login/ Register</button>
    </header>
  )
}

export default Header