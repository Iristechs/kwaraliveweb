import React, {useState} from 'react';
import RegisterationStatus from './registration_response';
import ImageUploading from 'react-images-uploading';



const CompleteBusinessRegistration=(props)=>{

    const [businessLogo, setBusinessLogo] = useState([]);
    const [businessImages, setBusinessImages] = useState([]);
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const [registrationResponseMessage, setRegistrationResponseMessage] = useState('');
    const [isPending, setIsPending] = useState(false);

    var images = []
    const maxNumber = 10;
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'
     
    

    //console.log(props.location)
    
    var businessData = props.location.businessData

    const onChangeLogo = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setBusinessLogo(imageList);
        //businessData.logo =  businessLogo
        
      };

    const onChangeBusinessImages = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setBusinessImages(imageList);
      
    };

    const businessImagesToArray=()=>{
      businessImages.forEach((businessImage)=>{
        images.push(businessImage.data_url.split(',')[1])
      })

      businessData.image = images
      businessData.nature_of_business = businessData.category
      

      if (businessLogo.length > 0){
        businessData.business_logo = businessLogo[0].data_url.split(',')[1]
      }

      return businessData
    }

    const handleSubmit=async ()=>{
      
      setIsPending(true)
      const completeBusinessData = await businessImagesToArray()

      console.log(completeBusinessData)

      fetch(prod+'/v1/business/register', {
        method: 'POST',
        headers: {
          'Content-type':'application/json',
          crossDomain:true
        },
        body: JSON.stringify(completeBusinessData)
      }).then(response => {
        setIsPending(false)
        if(response.ok){
            return response.json()
        }
    }).then(data=>{
       setRegistrationStatus(data.status)
       setRegistrationResponseMessage(data.message)
    })
    }

    

    return(
        <div className='user-form-cont'>
            <div className='complete-reg'>
              <div className='complete-images'>
              <ImageUploading
                        multiple={false}
                        value={businessLogo}
                        onChange={onChangeLogo}
                        maxNumber={1}
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
                            
                            <div className='business-picture-cont' onClick={()=>{setBusinessLogo([]); return onImageUpload()}}>
                              {
                                businessLogo.length > 0 ? <> 
                                <img  className='profile-picture' src={imageList[0].data_url} alt="" width="100" /> 
                                </> : 
                                <p className='upload-logo' >upload a logo</p>
                              }
                                      
                            </div>
                            
                          </div>
                        )}
                            </ImageUploading>

                            <ImageUploading
                        multiple={true}
                        value={businessImages}
                        onChange={onChangeBusinessImages}
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
                            
                            <div className='business-picture-cont' onClick={()=>{setBusinessImages([]); return onImageUpload()}}>
                              
                                <p className='upload-logo' >{
                                  businessImages.length > 0 ? businessImages.length + ' images selected' : 'upload images'
                                }</p>
                                
                                      
                            </div>
                            
                          </div>
                        )}
                    </ImageUploading>
              </div>

              {
                (businessImages.length > 0 && !isPending) ?

                <button className='submit-registration' onClick={handleSubmit}>register</button>

                :

                (businessImages.length > 0 && isPending) ?

                <button className='disabled' disabled>registering ...</button>
                :


                <button className='disabled' disabled>register</button>
              }
              
              
            </div>

            {

                registrationResponseMessage.length > 0 && <RegisterationStatus status={registrationResponseMessage}/>
      
            }



            
        </div>
    )
}

export default CompleteBusinessRegistration