import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
   

    return (
        <div className='Nav'>
            <Link id='linkstyle' to="/home">Home</Link>
            <Link id='linkstyle' to="/review">Review</Link>
            <Link id='linkstyle' to="/dashboard">Dashboard</Link>
            <Link id='linkstyle' to="/blog">Blog</Link>
            <Link id='linkstyle' to="/about">About</Link>
        </div>
    );
};

export default Navbar;