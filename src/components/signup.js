import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css';



const SignUp=()=>{
    return(
        <div className='signup-cont'>

            <div className='register'>
                <h4>Register as</h4>
                <ul>
                    <li><Link to='/sign-up/register-business' className='registration-link'>A business owner</Link></li>
                    <li><Link to='/sign-up/register-user' className='registration-link'>A regular user</Link></li>
                </ul>
            </div>
           
        </div>
        
    )
}

export default SignUp