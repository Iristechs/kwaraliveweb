import {  React } from "react";
import '../css/nav.css';
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <nav>
            <ul>
                <li className='nav-links'><Link className='link' to='/'>Home</Link></li>
                <li className='nav-links'><Link className='link' to='/sign-up'>Sign Up</Link></li>
                <li><img src='images/logo.png' height='50px'/></li>
                <li className='nav-links'><Link className='link' to='/sign-in'>Sign In</Link></li>
                <li className='nav-links'><Link className='link' to='/about'>About</Link></li>
                <li><Link className='link' to='/search'><img src='images/search.png' height='50px'/></Link></li>
            </ul>
        </nav>
    )
}

export default Nav