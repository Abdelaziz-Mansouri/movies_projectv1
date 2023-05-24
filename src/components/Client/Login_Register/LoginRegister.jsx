import React, {useContext, useEffect, useState} from 'react'
import { Routes, Route, useRoutes } from 'react-router'
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
        try{
        setUser(jwt(cookies.get('jwt_authorization')))
        }catch(err){
            console.log(err);
        }
    },[])

    useEffect(() => {


        try{
        setUserState(user?.Firstname)

        }catch(err){
            console.log(err);
        }

        console.log(user, userState);
    },[user])

    return (
        <>
            <Nav />
            <Routes>
                {userState == 'test' ? <Route exact path="/" element={<Home />} /> : null}
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                {/* <Route exact path="*" element={<Login />} /> */}
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