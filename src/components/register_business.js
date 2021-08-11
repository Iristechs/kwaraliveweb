import React, { useState, useEffect } from 'react';
import MakePayment from './payment';
import RegisterationStatus from './registration_response';
import ImageUploading from 'react-images-uploading';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


const BusinessImages=()=> {
    const [images, setImages] = React.useState([]);
    const maxNumber = 5;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  
    return (
      <div className="App">
        <ImageUploading
          multiple
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
                upload business Images
              </span>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
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
const BusinessRegisteration=()=>{

    const [businessimages, setBusinessImages] = useState([]);
    const [businessLogo, setBusinessLogo] = useState([]);
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
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [registerationResponse, setRegisteraionResponse] = useState([])
    const [isPending, setIspending] = useState(false)
    const [registrationComplete, setRegistrationComplete] = useState(false)
    const [transactionID, setTransactionID] = useState('')
    var businessData = {businessimages, businessLogo, first_name, last_name, email, phone_number, address, password, business_name,
                        confirmPassword, website_url}
    
    const maxNumber = 5;

    console.log(transactionID)
  
    const onChangeBusinessImages = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setBusinessImages(imageList);
    };

    const onChangeBusinessLogo = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setBusinessLogo(imageList);
      };

      const validate=()=>{
        if ((businessimages.length > 0 ) && (first_name.length > 0) && (last_name.length > 0)  && (email.length > 0) && (phone_number.length > 0) && address.length > 0 && password.length > 0
         && (confirmPassword.length > 0) && (category.length > 0)){
          setRegistrationComplete(true)
         }else{
          setRegistrationComplete(false)
         }
      }

      const handleSubmit=(e)=>{
        e.preventDefault();
        
      

      }
      
        const config = {
          public_key: 'FLWPUBK_TEST-5d358b8be02a5ca924ff09d135b14939-X',
          tx_ref: Date.now(),
          amount: 1000,
          currency: 'NGN',
          payment_options: 'card,mobilemoney,ussd',
          customer: {
            email: email,
            phonenumber: phone_number,
            name: first_name + ' ' + last_name,
          },
          customizations: {
            title: 'Kwara Live business Registeration',
            description: 'Registration',
            
          },
        };
      
        const handleFlutterPayment = useFlutterwave(config);
      
      

      
      
    

    
    return(
        <div className='user-form-cont'>
            <form className='user-reg-form'>
                <div className='picture-upload'>
            
                    <ImageUploading
                          multiple
                          value={businessimages}
                          onChange={onChangeBusinessImages}
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
                            <div className="upload__image-wrapper" id='business-images'>

                              {businessimages.length > 0 && <p className='image-count'>{businessimages.length} images selected</p>}

                              <div className='business-images-wrapper'>
                                <span
                                  className='business-images-uploader'
                                  style={isDragging ? { color: 'red' } : undefined}
                                  onClick={onImageUpload}
                                  {...dragProps}
                                >
                                  upload business Images
                                </span>
                                &nbsp;
                                <span className='business-images-uploader' onClick={onImageRemoveAll}>Remove all images</span>

                              </div>
                              
                                                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  {/*<img src={image['data_url']} alt="" width="100" />*/}
                                </div>
                              ))}
                            </div>
                          )}
                        </ImageUploading>

                        <ImageUploading
                            multiple={false}
                            value={businessLogo}
                            onChange={onChangeBusinessLogo}
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
                              <div className="upload__image-wrapper" id='logo-wrapper'>
                                
                                <div className='picture-cont'>
                                  {
                                    businessLogo.length > 0 ? <> 
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
                                  Business Logo
                                </span>
                                &nbsp;               
                                
                              </div>
                            )}
                    </ImageUploading>
                    
                    

                </div>

                <div className='inputs'>
                    
                    <div className='names'> 
                        <input type='text' name = 'first' placeholder='First Name' required value={first_name} onChange={(e)=>{
                                                                                                                  setFirstName(e.target.value)
                                                                                                                  validate()}}/><br/>
                        <input type='text' placeholder='Last Name' id='last-name' required value={last_name} onChange={(e)=>{
                                                                                                                      setLastName(e.target.value)
                                                                                                                      validate()}}/><br/>
                    </div>
                    
                    <div className='merged-fields'>
                        <input type='email' placeholder='Email' required value={email} onChange={(e)=>{
                                                                                                      setEmail(e.target.value)
                                                                                                      validate()}}/><br/>
                        <input type='text' placeholder='Phone' id='phone' required value={phone_number} onChange={(e)=>{
                                                                                                              setPhone(e.target.value)
                                                                                                              validate()}}/><br/>
                    </div>

                    {/*<div className='merged-fields'>
                        <input type='text' placeholder='Business Name' required/><br/>
                        <input type='text' placeholder='Business Nature' id='business-nature' required/><br/>
                    </div>*/}
                    <input type='text' placeholder='Business Name' required value={business_name} onChange={(e)=>{setBusinessName(e.target.value)
                                                                                                                      validate()}}/><br/>

                    <div className='merged-fields'>
                        <input type='text' placeholder='Website Url' value={website_url} onChange={(e)=>setWebsiteUrl(e.target.value)}/><br/>
                        <input type='text' placeholder='Business Category' id='business-category' required value={category} onChange={(e)=>{setCategory(e.target.value)
                                                                                                                                                validate()}}/><br/>
                    </div>
                    
                    <input type='text' placeholder='address' required value={address} onChange={(e)=>{setAddress(e.target.value)
                                                                                                        validate()}}/><br/>
                    
                    <div className='merged-fields'>
                        <input type='password' required placeholder='password' value={password} onChange={(e)=>{
                                                                                                              setPassword(e.target.value)
                                                                                                              validate()}}/><br/>
                        <input type='password' required placeholder='confirm password' id='confirm' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)
                                                                                                                                              validate()}}/><br/>
                    </div>

                    <textarea placeholder='business description' className='business-description' value={business_description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                    {!registrationComplete && password !== confirmPassword ? <button className='submit-registration'>register</button> : <button
                      className = 'submit-registration'
                        onClick={() => {
                          
                          handleFlutterPayment({
                            callback: (response) => {
                              console.log(response);
                              if (response.status === 'successful'){
                                setTransactionID(response.transaction_id)
                              }    
                              closePaymentModal() // this will close the modal programmatically
                            },
                            onClose: () => {},
                          });
                        }}
                      >
                        Proceed with payment
                  </button>}
                    {/*<button className='submit-registration'>register</button>*/}
                    {
                      password !== confirmPassword && 
                      <div className='password-match'>
                        <p>passwords do not match</p>
                        <p className='closer'>&times;</p> 
                      </div>
                  
                    }  
                </div>
                
            </form>
        </div>
    )
}

export default BusinessRegisteration