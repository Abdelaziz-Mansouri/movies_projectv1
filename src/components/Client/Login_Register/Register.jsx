import React, { useState } from 'react'
import styles from '../../../style'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'

const Register = () => {

    const Navigate = useNavigate()

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm : ''
    });

    const handleInput = (e) => {
        setData({...data, [e.target.id] : e.target.value})
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.firstName != "" && data.lastName != "" && data.email != "" && data.password != "" && data.password == data.passwordConfirm){
            axios.post('/Users/SignUp', data).then((res) => {
                console.log(res);
                Navigate('/login')
            }).catch(err => console.log(err))
        }
    }

    return (
        <form className='w-fit h-fit p-[64px] rounded-[22px] bg-secondary absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <h1 className='text-white text-center font-extrabold text-[32px] mb-[31px]'>Register</h1>
            <div className='flex flex-col gap-[20px] justify-center rounded-[22px] '>
                <div className="flex gap-[20px] w-full">
                    <input id='firstName' onInput={handleInput} required placeholder='First Name' type="text" className={styles.loginInput} />
                    <input id='lastName' onInput={handleInput} required placeholder='Last Name' type="text" className={styles.loginInput} />
                </div>
                <input id='email' onInput={handleInput} required placeholder='Email' type="email" className={styles.loginInput} />
                <input id='password' onInput={handleInput} required placeholder='Password' type="password" className={styles.loginInput} />
                <input id='passwordConfirm' onInput={handleInput} required placeholder='Confirm Password' type="password" className={styles.loginInput} />

                <button type='submit' onClick={handleSubmit} className={styles.loginBtn}>Register</button>
                <Link className='text-white text-center text-[24px]' to='/login'>Already have account? Login</Link>


            </div>
        </form>
    )
}

export default Register