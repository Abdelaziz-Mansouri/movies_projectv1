import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from '../../style';
import { Link, useNavigate } from 'react-router-dom';

import Cookies from 'universal-cookie';

import UserContext from '../UserContext';

const Header = () => {

  const { user, setUser } = useContext(UserContext);

  const cookies = new Cookies();

  const navigate = useNavigate()

  const logout = async () => {
    cookies.remove('jwt_authorization');
    setUser(null)
    navigate('/login')
  }

  return (
    <header className='h-[160px] w-full flex justify-around items-center'>
      <div className="flex items-center">
        <div className="rounded-full bg-primary w-[100px] h-[100px] my-[29px] mr-[17px]"></div>
        <h1 className='text-[32px]'>LOGO</h1>
      </div>
      <div className='bg-[#D9D9D9] rounded-[32px] w-[400px] h-[64px] relative'>
        <input type="text" className='bg-transparent absolute left-[30px] top-[10px] text-[16px] h-[44px] w-[300px] outline-none placeholder-black' placeholder='Search for...' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[32px] absolute right-[16px] top-[16px] text-primary' />
      </div>
      {user ?
        <button onClick={logout} className={styles.btnPrimary}>logout</button>
        :
        <Link to='/login' className={styles.btnPrimary}>Login/ Register</Link>
      }
    </header>
  )
}

export default Header