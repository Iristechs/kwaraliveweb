import React from "react";
import '../css/footer.css'
import { Link } from 'react-router-dom';


const currentDate = Date().split(' ')[3]

const Footer=()=>{
    return(
        <footer>
            <div className='section-cont'>
                <div>
                    <Link className='footer-links' to='/'>About</Link>
                    <Link className='footer-links' to='/'>Terms and Conditions</Link>
                    <Link className='footer-links' to='/'>Android</Link>
                    <Link className='footer-links' to='/'>IOS</Link>
                </div>
                <div>
                    <Link className='footer-links' to='/'>Advertising</Link>
                    <Link className='footer-links' to='/'>Privacy</Link>
                    <Link className='footer-links' to='/'>Categories</Link>
                    <Link className='footer-links' to='/'>Questions</Link>
                </div>
            </div>
            
            <p className='copyright'>&copy; kwaralive {currentDate}</p>
        </footer>
    )
}

export default Footer