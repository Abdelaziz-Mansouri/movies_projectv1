import React from 'react'
import { Routes, Route } from 'react-router'
import Register from './Register'
import Login from './Login'
import Home from '../Home'

const LoginRegister = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    )
}

export default LoginRegister