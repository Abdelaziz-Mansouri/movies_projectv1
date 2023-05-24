import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Register from './Register'
import Login from './Login'
import Home from '../Home'
import Nav from '../../Nav'
import UserContext from '../../UserContext'

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

        console.log(user, userState);
    }, [user])

    return (
        <>
            {userState == 'Admin' ? <Nav /> : null}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={userState ? <Navigate to="/" /> : <Register />} />
                <Route exact path="/login" element={userState ? <Navigate to="/" /> : <Login />} />
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