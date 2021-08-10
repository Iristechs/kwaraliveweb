import React, { useState, useEffect } from 'react';
import MakePayment from './payment';



const BusinessRegisteration=()=>{

    
    return(
        <div className='user-form-cont'>
            <form className='user-reg-form'>
                <div className='picture-upload'>
                    <input type='file' id='file' name='file'/><br/>
                    <img className='avatar' src='../images/user.png'/>
                    <label htmlFor='file' className='label'><span className='uploader'>upload a business pictures</span></label><br/>
            
                    <input type='file' id='logo' name='logo'/><br/>
                    <label htmlFor='file'><span className='uploader'>upload a business logo</span></label><br/>

                    {/*<span className='uploader'>Register with Payment</span>*/}

                    <MakePayment />


                </div>

                <div className='inputs'>
                    
                    <div className='names'> 
                        <input type='text' name = 'first' placeholder='First Name' required/><br/>
                        <input type='text' placeholder='Last Name' id='last-name' required/><br/>
                    </div>
                    
                    <div className='merged-fields'>
                        <input type='email' placeholder='Email' required/><br/>
                        <input type='text' placeholder='Phone' id='phone' required/><br/>
                    </div>

                    <div className='merged-fields'>
                        <input type='text' placeholder='Business Name' required/><br/>
                        <input type='text' placeholder='Business Nature' id='business-nature' required/><br/>
                    </div>

                    <div className='merged-fields'>
                        <input type='text' placeholder='Website Url' required/><br/>
                        <input type='text' placeholder='Business Category' id='business-category' required/><br/>
                    </div>
                    
                    <input type='text' placeholder='address' required/><br/>
                    
                    <div className='merged-fields'>
                        <input type='password' required placeholder='password'/><br/>
                        <input type='password' required placeholder='confirm password' id='confirm'/><br/>
                    </div>

                    <textarea placeholder='business description' className='business-description'></textarea>
                    
                    <button className='submit-registration'>register</button>
                </div>
                
            </form>
        </div>
    )
}

export default BusinessRegisteration