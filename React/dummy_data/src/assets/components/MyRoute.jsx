import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import NavBar from './NavBar'

function MyRoute(){
    return (
        <>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="/Home" element={<Navigate to={"/"}/>} />    
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default MyRoute