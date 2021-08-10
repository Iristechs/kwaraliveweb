import React, {userState, useState} from 'react';
import SignUp from './signup';
import '../css/registeration.css';


import ImageUploading from 'react-images-uploading';

const ImageUpload=()=> {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
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
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <span

            className='uploader'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </span>
            &nbsp;
            {/*<button onClick={onImageRemoveAll}>Remove all images</button>*/}
            <button className='remove-image' onClick={onImageRemoveAll}>&times;</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div className='picture-cont'>
                      {/*<img className='avatar' src='../images/user.png'/>*/}
                      <img src={image['data_url']} alt="" width="100" />
                      
                    </div>
                
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}


const UserRegisteration=()=>{


    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return(
        <div className='user-form-cont'>
            <form className='user-reg-form' onSubmit={handleSubmit}>
                <div className='picture-upload'>

                    <ImageUpload />
                </div>

                <div className='inputs'>
                    
                    <div className='names'> 
                        <input type='text' name = 'first' placeholder='First Name' onChange = {(e)=>setFirstName(e.target.value)} value = {firstName} required/><br/>
                        <input type='text' placeholder='Last Name' onChange = {(e)=>setLastName(e.target.value)} value = {lastName} id='last-name' required/><br/>
                    </div>
                    
                    <input type='email' placeholder='Email' onChange = {(e)=>setEmail(e.target.value)} value = {email} required/><br/>
                    <input type='text' placeholder='Phone' onChange = {(e)=>setPhone(e.target.value)} value = {phone} required/><br/>
                    <input type='text' placeholder='address' onChange = {(e)=>setAddress(e.target.value)} value = {address} required/><br/>
                    
                    <input type='password' required placeholder='password' onChange = {(e)=>setPassword(e.target.value)} value = {password}/><br/>
                    <input type='password' required placeholder='confirm password' onChange = {(e)=>setConfirmPassword(e.target.value)} value = {confirmPassword}/><br/>
                    <button  className='submit-registration'>register</button>
                    
                </div>
                
            </form>
        </div>
    )
}

export default UserRegisteration