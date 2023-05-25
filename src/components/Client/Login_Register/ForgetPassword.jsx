import React, { useState, useContext } from 'react'
import styles from '../../../style'
import { Link, useNavigate , useParams } from 'react-router-dom'
import axios from '../../../api/axios'

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'

import UserContext from '../../UserContext';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const {token} = useParams();
  
  const [data, setData] = useState({
    password: '',
    confirmPassword : '',
    token
  });
  const handleInput = (e) => {
      setData({ ...data, [e.target.id]: e.target.value })
      console.log(data);
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      if(data.password === data.confirmPassword){
        axios.post('/RegisterAndMethods/Rest_Password' , data).then((res) => {
          navigate('/login')
        }).catch(err => console.log(err))
      }else{
        console.log('you have error');
      }
  }
  return (
    <form className='min-w-[550px] h-fit p-[64px] rounded-[22px] bg-secondary absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]'>
      <h1 className='text-white text-center font-extrabold text-[32px] mb-[31px]'>Verif Password</h1>
      <div className='flex flex-col gap-[20px] justify-center rounded-[22px] '>
          <input id='password' onInput={handleInput} required placeholder='Password' type="password" className={styles.loginInput} />
          <input id='confirmPassword' onInput={handleInput} required placeholder='Confirm Password' type="password" className={styles.loginInput} />

          <button type='submit' onClick={handleSubmit} className={styles.loginBtn}>Send</button>

      </div>
    </form>
  )
}

export default ForgetPassword