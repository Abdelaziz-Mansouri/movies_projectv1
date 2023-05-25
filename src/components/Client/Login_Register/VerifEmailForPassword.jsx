import React, { useState } from 'react'
import styles from '../../../style'
import axios from '../../../api/axios'

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
        axios.post('/RegisterAndMethods/Forgot_Password?email='+data.email).then((res) => {
            console.log(res);
        }).catch(err => console.log(err))

    }

  return (
    <form className='min-w-[550px] h-fit p-[64px] rounded-[22px] bg-secondary absolute inset-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <h1 className='text-white text-center font-extrabold text-[32px] mb-[31px]'>Verif Email</h1>
        <div className='flex flex-col gap-[20px] justify-center rounded-[22px] '>
            <input id='email' onInput={handleInput} required placeholder='Email' type="email" className={styles.loginInput} />

            <button type='submit' onClick={handleSubmit} className={styles.loginBtn}>Send</button>

        </div>
    </form>
  )
}

export default VerifEmailForPassword