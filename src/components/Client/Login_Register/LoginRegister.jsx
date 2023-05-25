import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Register from './Register'
import Login from './Login'
import Home from '../Home'
import Nav from '../../Nav'
import UserContext from '../../UserContext'
import VerifEmailForPassword from './VerifEmailForPassword'
import ForgetPassword from './ForgetPassword';

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'


const LoginRegister = () => {

    const cookies = new Cookies();


    const { user, setUser } = useContext(UserContext);

    const [userState, setUserState] = useState('')

    useEffect(() => {
        try {
            setUser(jwt(cookies.get('jwt_authorization')))
        } catch (err) {
            console.log(err);
        }
    }, [])

    useEffect(() => {
        try {
            setUserState(user?.Role)
        } catch (err) {
            console.log(err);
        }
    }, [user])

    return (
        <>
            {userState == 'Admin' ? <Nav /> : null}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
                <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                <Route exact path="/verifEmail" element={user ? <Navigate to="/" /> : <VerifEmailForPassword/>} />
                <Route exact path="/forgetPassword/:token" element={user ? <Navigate to="/" /> : <ForgetPassword/>} />
            </Routes>
        </>

        // <Routes>
        //     <Route exact path="/" element={<Home />} />
        //     <Route exact path="/register" element={<Register />} />
        //     <Route exact path="/login" element={<Login />} />
        // </Routes>
    )
}

export default LoginRegister