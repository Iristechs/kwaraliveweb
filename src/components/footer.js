import React from "react";
import '../css/footer.css'
import { Link } from 'react-router-dom';


const currentDate = Date().split(' ')[3]

const Footer=()=>{
    return(
        <footer>
            <section className='section-cont'>
                <div id='mobile' className='sections'>
                    <h5>Mobile</h5>
                    <div>
                        <a className='footer-links' href='https://play.google.com/store/apps/details?id=com.kwaralive.app'><img src='../images/play-store.png' className='android'/></a>
                        <Link className='footer-links' to='/'><img src='../images/app-store.png' className='ios'/></Link>
                    </div>
                    
                </div>
                <div id='about' className='sections'>
                   
                    <h5>About</h5> 
                    <div>
                        <Link className='footer-links' to='/'>Privacy Policy</Link>
                        <Link className='footer-links' to='/'>Terms and Conditions</Link>
                    </div>
                    
                    
                </div>
                {/*<div>
                    <Link className='footer-links' to='/'>Advertising</Link>
                    <Link className='footer-links' to='/'>Privacy</Link>
                    <Link className='footer-links' to='/'>Categories</Link>
                    <Link className='footer-links' to='/'>Questions</Link>
                </div>*/}
            </section>
            {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348127277493"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

            <p className='copyright'>&copy; kwaralive {currentDate}</p>
        </footer>
    )
}

export default Footer