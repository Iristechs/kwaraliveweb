import React, { useState } from 'react';
import '../css/registeration.css';
import RegisterationStatus from './registration_response';
import ImageUploading from 'react-images-uploading';



const UserRegisteration=()=>{


    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [registerationResponse, setRegisteraionResponse] = useState([])
    const [isPending, setIspending] = useState(false)
    const [images, setImages] = useState([]);
    const maxNumber = 1;
    const [userData, setUserData] = useState({})

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
      
      
    };
    

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (images.length > 0){
          var image = images[0].data_url.split(',')[1] 
          setUserData({first_name, last_name, email, phone_number, address, password, image})
        }else{
          setUserData({first_name, last_name, email, phone_number, address, password})
        }

        if (password == confirmPassword){
          setPasswordMatch(true)

          setIspending(true)
          fetch('https://kwaralive.herokuapp.com/v1//user/register', {
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
          setRegisteraionResponse(data)
          setIspending(false)
          
        })
        }else{
          console.log(userData)
          setPasswordMatch(false)
        }
        
        
        
        
    }

    return(
        <div className='user-form-cont'>
            <form className='user-reg-form' onSubmit={handleSubmit}>
                <div className='picture-upload'>

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
                              <img className='profile-picture' src={imageList[0].data_url} alt="" width="100" /> 
                              <button className='remove-image' onClick={() => onImageRemove(imageList[0])}>&times;</button> 
                              </> : 
                              <img className='avatar' src='../images/user.png'/>
                            }
                                    
                          </div>

                          <span

                          className='uploader'
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            upload picture
                          </span>
                          &nbsp;

                        
                        
                          
                        </div>
                      )}
                    </ImageUploading>
                </div>

                <div className='inputs'>
                    
                    <div className='names'> 
                        <input type='text' name = 'first' placeholder='First Name' onChange = {(e)=>setFirstName(e.target.value)} value = {first_name} required/><br/>
                        <input type='text' placeholder='Last Name' onChange = {(e)=>setLastName(e.target.value)} value = {last_name} id='last-name' required/><br/>
                    </div>
                    
                    <input type='email' placeholder='Email' onChange = {(e)=>setEmail(e.target.value)} value = {email} required/><br/>
                    <input type='text' placeholder='Phone' onChange = {(e)=>setPhone(e.target.value)} value = {phone_number} required/><br/>
                    <input type='text' placeholder='address' onChange = {(e)=>setAddress(e.target.value)} value = {address} required/><br/>
                    
                    <input type='password' required placeholder='password' onChange = {(e)=>setPassword(e.target.value)} value = {password}/><br/>
                    <input type='password' required placeholder='confirm password' onChange = {(e)=>setConfirmPassword(e.target.value)} value = {confirmPassword}/><br/>
                    {isPending ? <button disabled className='submit-registration'>registering ....</button> : <button  className='submit-registration'>register</button>}
                    
                    {
                      !passwordMatch && 
                      <div className='password-match'>
                        <p>passwords do not match</p>
                        <p className='closer'>&times;</p> 
                      </div>
                  
                    }  

                    {registerationResponse.message && <RegisterationStatus status={registerationResponse.message} />}

                </div>

                
                
            </form>

            

          
        </div>
    )
}

export default UserRegisteration