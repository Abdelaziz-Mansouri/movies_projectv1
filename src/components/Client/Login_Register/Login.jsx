import React, { useState } from 'react'
import styles from '../../../style'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'

const Login = () => {

    const Navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: ''
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
            localStorage.setItem('token', token);
            Navigate('/')

        }).catch(err => console.log(err))
    }

    return (
        <form className='min-w-[550px] h-fit p-[64px] rounded-[22px] bg-secondary absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <h1 className='text-white text-center font-extrabold text-[32px] mb-[31px]'>Login</h1>
            <div className='flex flex-col gap-[20px] justify-center rounded-[22px] '>
                <input id='email' onInput={handleInput} required placeholder='Email' type="email" className={styles.loginInput} />
                <input id='password' onInput={handleInput} required placeholder='Password' type="password" className={styles.loginInput} />

                <button type='submit' onClick={handleSubmit} className={styles.loginBtn}>Login</button>
                <Link className='text-white text-center text-[24px]' to='/register'>Don’t have account yet ? Register</Link>


            </div>
        </form>
    )
}

export default Login