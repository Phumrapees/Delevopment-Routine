import { NavLink } from "react-router-dom";
import "./navbar.css";
import React from 'react'

function NavBar() {
    return(
        <nav className="navbar">
            <NavLink to="/">|Home|</NavLink>
            <NavLink to="/about">About|</NavLink>
            <NavLink to="/contact">Contact|</NavLink>
        </nav>
    )
}

export default NavBar