import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RadioGroup, Radio } from '@material-ui/core';




const BusinessRegisteration=()=>{

    
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [business_name, setBusinessName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [website_url, setWebsiteUrl] = useState('')
    const [business_description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])
    
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'


    const showCategories=()=>{
        const categoryContainer = document.querySelector('.radio-group')
        categoryContainer.style.display = 'block'
    }

    useEffect(()=>{
        fetch(
            prod + '/v1/business-categories',
            {
                method: 'GET',
                headers:{
                    'Content-type':'application/json',
                    crossDomain:true       
                }
            }
        ).then(
            response => {
                if (response.ok){
                    return response.json()
                }
            }
        ).then(
            data => {
                setCategories(data.categories)
                console.log(categories)
            }
            
        )
    }, [])
    
    return(
        <div className='user-form-cont'>

            {/*<h2 className='registration-header'>Business Registration</h2>*/}
            <form className='user-reg-form'>
          
                <div className='inputs'>
                    
                    <div className='names'> 
                        <input type='text' name = 'first' placeholder='First Name' required value={first_name} onChange={(e)=>setFirstName(e.target.value)}/><br/>
                                                                                                                                                                                                                
                        <input type='text' placeholder='Last Name' id='last-name' required value={last_name} onChange={(e)=>setLastName(e.target.value)}/><br/>
                                                                                                                                                                                   
                    </div>
                    
                    <div className='merged-fields'>
                        <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                                                                                                      
                                                                                                      
                        <input type='text' placeholder='Phone' id='phone' required value={phone_number} onChange={(e)=>setPhone(e.target.value)}/><br/>
                                                                                                              
                                                                                                              
                    </div>

                    {/*<div className='merged-fields'>
                        <input type='text' placeholder='Business Name' required/><br/>
                        <input type='text' placeholder='Business Nature' id='business-nature' required/><br/>
                    </div>*/}
                    <input type='text' placeholder='Business Name' required value={business_name} onChange={(e)=>setBusinessName(e.target.value)}/><br/>
                                                                                                                      

                    <div className='merged-fields'>
                        <input type='text' placeholder='Website Url' id='website-url' value={website_url} onChange={(e)=>setWebsiteUrl(e.target.value)}/><br/>
                        <p id='business-category' className='select-cont' onClick={showCategories}>{category.length > 0 ? category : 'select business category'}</p>  
                    
                    <div  className='radio-group'>
                        {<RadioGroup onChange={(e)=> {
                            
                   
                                setCategory(e.target.value)
                                document.querySelector('.radio-group').style.display = 'none'
                                
                            }
                        }
                            value = {category}

                            children= {
                            
                            categories.map((businessCategory) =>{
                                return (
                                    <div key={businessCategory.id} className='radio-option'><p>{businessCategory.category}</p> <Radio className='radio-button' checked={businessCategory.category === category && true} value={businessCategory.category}/> 
                                </div>
                                )
                            })
                            
                            
                            }/>}
                    </div>

                                                                                                                                
                    </div>
                    
                    <input type='text' placeholder='address' required value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>
                                                                                                        
                    
                    <div className='merged-fields'>
                        <input type='password' required placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                                                                                                              
                                                                                                              
                        <input type='password' required placeholder='confirm password' id='confirm' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
                                                                                                                                              
                    </div>

                    <textarea placeholder='business description' className='business-description' value={business_description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                    
                    {
                      ((confirmPassword.length >= password.length  ) && (password!== confirmPassword)) &&
                      <div className='password-match'>
                        <p>passwords do not match</p>
                        {/*<p className='closer'>&times;</p> */}
                      </div>
                  
                    }  


                    {

                    (first_name.length > 0 && last_name.length > 0 && email.length > 0 && phone_number.length > 0 && address.length > 0 && business_name.length > 0 && category.length > 0 && ((password.length > 0) && (password === confirmPassword))) ?


                    <Link

                    className = 'next'
                    aria-disabled

                    style ={{background:'white'}}
                    to={{
                    pathname:'/sign-up/register-business/complete-registration',
                    businessData: {first_name, last_name, email, phone_number, address, password, business_name, website_url, business_description, category}
                    }}>next
                    </Link>

                    :

                    <button className='next' disabled>
                    next
                    </button>

                    }
                </div>

                
                
            </form>
            
        </div>
        
    )
}

export default BusinessRegisteration