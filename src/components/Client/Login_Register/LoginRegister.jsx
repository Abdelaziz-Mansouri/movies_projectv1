import React from 'react'
import { Routes, Route, useRoutes } from 'react-router'
import Register from './Register'
import Login from './Login'
import Home from '../Home'

const LoginRegister = () => {
    const routes = useRoutes([
        { path: '/', element: <Home />},
        { path: '/register', element: <Register />},
        { path: '/login', element: <Login />}
    ])
    return (
        <>
            {routes}
        </>
        // <Routes>
        //     <Route exact path="/" element={<Home />} />
        //     <Route exact path="/register" element={<Register />} />
        //     <Route exact path="/login" element={<Login />} />
        // </Routes>
    )
}

export default LoginRegister