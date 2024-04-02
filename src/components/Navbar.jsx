import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Navbar = ()=>{
    return(
        <div>

            <Link to="/">
                <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
            </Link>
        </div>
    )
}

export default Navbar;