import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../css/business_profile.css';
import { FaStar } from 'react-icons/fa';
import ReactMarkdown from "react-markdown";
import ReadMoreReact from 'read-more-react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';




const BusinessProfile=()=>{
    const [businessProfile, setProfile] = useState([])
    const [isFetching, setFetching] = useState(true)
    const [wallet_id, setWallet] = useState('')
    const { id } = useParams()
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'

    

    useEffect(async ()=>{

        await fetch(`${prod}/v1/business/search?id=${id.slice(5,20)}`, {headers : {
            crossDomain:true, 
            'Accept': 'application/json'
        }
           })
           .then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then(
                data => {
                    setProfile(data.search_result[0])
                    //setFetching(false)
                    
           
                })

        await fetch(`${prod}/v1/get-wallet-details?owner_id=${id.slice(5,20)}`, {headers : {
            crossDomain:true, 
            'Accept': 'application/json'
        }
            })
            .then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then(
                data => {
                    setWallet(data.wallet_details.wallet_id)
                    console.log(wallet_id)
                    setFetching(false)                 
                })

               
            
    }, [id])


    const handleImageClick=(src)=>{
        var modal = document.getElementById('modal-for-image')
        var image = document.querySelector('.image-in-modal')

        image.src = src 
        modal.style.display = 'block'
    }
    
    
    
    

    return(
        <div className='business-profile-bg'>

            <div id='modal-for-image'>
                    <button className='closer' onClick={()=>{document.getElementById('modal-for-image').style.display='none'}}>&times;</button>
                    <Image className='image-in-modal'></Image>
            </div>


            {

                !isFetching ? 

                <div className='business-profile-wrapper'>
                    <div className='upper-card'>
                            <div className='business-logo'>
                                {   businessProfile.logo ? 
                                    <Image
                    
                                        publicId={businessProfile.logo}
                                        secure='true'
                                        cloud_name='daslnufbd' 
                                        loading='lazy'
                                       
                                        
                                        >
                                        
                                    </Image> : 
                                    <img src='../../images/logo.jpg' className='business-logo' alt=''/>
                                }
                            </div>
                            <div className='wallet-id'>
                                <p>Wallet ID : </p>
                                <p> {wallet_id}</p>
                            </div>
                                                        
                    </div>

                    <div className='lower-card1'>
                        <div className='verification-status'>{businessProfile.verification_status == 'verified' && <img src = '../../images/verified.png' alt=''/>}</div>
                        <div className='profile-details'>
                            <div className='span'>
                                <h3 className='owners-name'>{businessProfile.business_name}</h3>
                                <p className='business-profile-categories'>{businessProfile.category}</p>
                            </div>
                            <div className='address-email-wrapper'>
                                <div className='address-wrapper'><img className='location' src='../../images/location2.png' alt=''/><p>{businessProfile.address}</p></div>
                                <div className='email-wrapper'><img className='email' src='../../images/email.png' alt=''/><p>{businessProfile.email}</p></div>
                            </div>
                                    
                        </div>
                    </div>

                    <div className='lower-card2'>
                        <h5 className='business-description-header'>Business Description</h5>
                           
                            
                            {/*<p><ReadMoreReact className='business-profile-description' text={businessProfile.business_description}/></p>*/}
                            <ReactMarkdown className='business-profile-description' children={businessProfile.business_description}/>
                                  
                                
                        
                    </div>

                    <div className='lower-card3'>
                    <h5 className='rating-header'>Reviews</h5>
                    {
                        businessProfile.ratings.length > 0 ? businessProfile.ratings.map((rating)=>(
                            <div key={rating.id}>
                                <div>
                                    <div className='ratings'>
                                        <p className='rater-name'>{rating.reviewer}</p>
                                            <div className='star-ratings'>
                                                
                                                {[...Array(5)].map((star, i)=>{
                                                    var ratingValue = i + 1

                                                    return (

                                                        
                                                            <FaStar
                                                                className='star'
                                                                key = {i}
                                                                color = { ratingValue <= rating.rating_value ? '#f8b26a' : 'gray'}
                                                            />

                                                    )
                                                })}
                                                <p className='rating-date'>{rating.date}</p>
                                            </div>
                                        <p className='rating-text'>{rating.rating_text}</p>
                                    </div>
                                </div>
                                
                            </div>
                        )) : <div className='no-reviews'>
                                <p>no reviews yet</p>
                                <Link to='/' className='submit-review'>review business</Link>
                            </div>
                    }
                            
                    </div>

                    <div className='lower-card4'>
                        <h5 className='business-images-header'>Business Images</h5>
                        <div className='business-profile-images'>
                            {
                                businessProfile.business_images.length > 0 ?businessProfile.business_images.map((image, i)=>(
                                    <div className='business-profile-image' key={i}>
                                            <Image
                            
                                            publicId={image}
                                            secure='true'
                                            cloud_name='daslnufbd' 
                                            loading='lazy'
                                            className = 'img'
                                            onClick={()=>handleImageClick(image)}
                                     >
                                            
                                        </Image>
                                    </div>
                                )) : <img className='no-images' src='../../images/no-image.png' alt=''/>
                                    
                            }
                        </div>
                        
                    </div>
                </div> :  <div className='loader-wraper-bg'><img className ='loader-gif' src ='../../images/loader.gif' alt=''/></div>

                


                }
                
        </div>
    )
}

export default BusinessProfile