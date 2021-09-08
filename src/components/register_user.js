import React, { useEffect, useState } from 'react';
import '../css/registeration.css';
import RegisterationStatus from './registration_response';
import ImageUploading from 'react-images-uploading';
import Poly from 'react-svg-polygon';



const UserRegisteration=()=>{


    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [registerationResponse, setRegisterationResponse] = useState([])
    const [isPending, setIspending] = useState(false)
    const [formComplete, setFormComplete] = useState(false)
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const userData = {first_name, last_name, email, phone_number, address, password}
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);  
      
    };


    const handleSubmit=(e)=>{
        e.preventDefault();


        if (images.length > 0){
          var image = images[0].data_url.split(',')[1]
          userData.image = image
        } 

        if (password === confirmPassword){
          setPasswordMatch(true)

          setIspending(true)
          fetch(prod+'/v1/user/register', {
            method: 'POST',
            headers: {
              'Content-type':'application/json',
              crossDomain:true
            },
            body: JSON.stringify(userData)
          }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => {
          setRegisterationResponse(data)
          setIspending(false)
          
        })
        }else{
          setPasswordMatch(false)
        }
            
    }

    return(
        <div className='user-form-cont'>
            <form className='user-reg-form' onSubmit={handleSubmit}>
                

               <ImageUploading
                      multiple={false}
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          
                          <div className='picture-cont'>
                            {
                              images.length > 0 ? <> 
                              <img onClick={()=>{setImages([]); return onImageUpload()}} className='profile-picture' src={imageList[0].data_url} alt="" width="100" /> 
                              </> : 
                              <img onClick={()=>{setImages([]); return onImageUpload()}} className='avatar' src='../images/upload.png' alt=''/>
                            }
                                    
                          </div>
                          
                        </div>
                      )}
                          </ImageUploading>
                
                <div className='cont-input-triangle'>
                  <div className='triangle'></div>
                  <div className='inputs'>
                      <div className='names'> 
                          <input type='text' name = 'first' placeholder='First Name' onChange = {(e)=>setFirstName(e.target.value)} value = {first_name} required/><br/>
                          <input type='text' placeholder='Last Name' onChange = {(e)=>setLastName(e.target.value)} value = {last_name} id='last-name' required/><br/>
                      </div>

                      <div className='merged-fields'> 
                        <input type='email' placeholder='Email' onChange = {(e)=>setEmail(e.target.value)} value = {email} required/><br/>
                        <input type='text' placeholder='Phone' onChange = {(e)=>setPhone(e.target.value)} id='phone' value = {phone_number} required/><br/>
                      </div>
                      <input type='text' placeholder='address' onChange = {(e)=>setAddress(e.target.value)} value = {address} required/><br/>
                      
                      <input type='password' required placeholder='password' onChange = {(e)=>setPassword(e.target.value)} value = {password}/><br/>
                      <input type='password' required placeholder='confirm password' onChange = {(e)=>setConfirmPassword(e.target.value)} value = {confirmPassword}/><br/>
                      {

                      
                      ((userData.first_name.length > 0 && userData.last_name.length > 0 && userData.email.length > 0 && userData.phone_number.length > 0
                         && userData.address.length > 0 && userData.password.length > 0 && (confirmPassword == password)) && !isPending) ? <button  className='submit-registration'>register</button> 

                      :

                      (userData.first_name.length > 0 && userData.last_name.length > 0 && userData.email.length > 0 && userData.phone_number.length > 0
                        && userData.address.length > 0 && userData.password.length > 0 && (confirmPassword == password)) && isPending? <button disabled className='disabled'>registering</button>

                      :

                      <button disabled className='disabled'>register</button>
                         
                      }
                      
                      {/*
                        !passwordMatch && 
                        <div className='password-match'>
                          <p>passwords do not match</p>
                          <p className='closer'>&times;</p> 
                        </div>
                    
                      */}  

                      {
                      
                        registerationResponse.message ? <RegisterationStatus status={registerationResponse.message}/> : 

                        (confirmPassword.length > 0) && (password !== confirmPassword) && <RegisterationStatus className='password-match' status='passwords do not match'/>
                      }

                  </div>
                </div>

                
                
            </form>

            

          
        </div>
    )
}

export default UserRegisteration