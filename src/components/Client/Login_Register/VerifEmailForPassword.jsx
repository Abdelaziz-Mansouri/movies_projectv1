import React, { useState, useContext } from 'react'
import styles from '../../../style'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'

import UserContext from '../../UserContext';

const VerifEmailForPassword = () => {
    const [data, setData] = useState({
        email: ''
    });

    const handleInput = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/Tokens/SignIn', data).then((res) => {
            console.log(res);
            const { token } = res.data;

            // * storing decoded token in the global state

            // const decoded = jwt(token)
            // console.log(decoded);

            // setUser(decoded)

            // // * storing token in a cookie

            // cookies.set('jwt_authorization', token, {
            //     expires: new Date(decoded.exp * 1000)
            // })

            // if (decoded?.Role == 'Admin') {
            //     Navigate('/admin')
            // } else {
            //     Navigate('/')
            //     console.log(decoded?.Role);
            // }

        }).catch(err => console.log(err))

        // // ! has to be removed

        // try {
        //     setUser(jwt(cookies.get('jwt_authorization')))


        // } catch (err) {
        //     console.log(err);
        // }

    }

  return (
    <form className='min-w-[550px] h-fit p-[64px] rounded-[22px] bg-secondary absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <h1 className='text-white text-center font-extrabold text-[32px] mb-[31px]'>Login</h1>
            <div className='flex flex-col gap-[20px] justify-center rounded-[22px] '>
                <input id='email' onInput={handleInput} required placeholder='Email' type="email" className={styles.loginInput} />

                <button type='submit' onClick={handleSubmit} className={styles.loginBtn}>Login</button>

            </div>
        </form>
  )
}

export default VerifEmailForPassword