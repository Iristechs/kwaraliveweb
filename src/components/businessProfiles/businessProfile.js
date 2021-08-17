import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../css/business_profile.css';
import { FaStar } from 'react-icons/fa';
import ReactMarkdown from "react-markdown";
import ReadMoreReact from 'read-more-react';




const BusinessProfile=()=>{
    const [businessProfile, setProfile] = useState([])
    const [isFetching, setFetching] = useState(true)
    const { id } = useParams()
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'

    useEffect(()=>{
        fetch(`${prod}/v1/business/search?id=${id}`, {headers : {
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
                    setFetching(false)
                    
                    
                })
            
    }, [id])

    return(
        <div className='business-profile-bg'>


            {

                !isFetching ? 

                <div className='business-profile-wrapper'>
                    <div className='upper-card'>
                        <hr/>
                            <div className='business-logo'>
                                <img src={businessProfile.logo}/>
                            </div>
                            
                            <div className='profile-details'>
                                <div className='span'><h3 className='owners-name'>{businessProfile.business_name}  . </h3> <p className='business-profile-categories'>{businessProfile.category}</p></div>
                                <div className='address-email-wrapper'>
                                    <div className='address-wrapper'><img className='location' src='../../images/location2.png'/><p>{businessProfile.address}</p></div>
                                    <div className='email-wrapper'><img className='email' src='../../images/email.png'/><p>{businessProfile.email}</p></div>
                                </div>
                                
                            </div>
                            
                            
                    </div>

                    <div className='lower-card1'>
                        
                    </div>

                    <div className='lower-card2'>
                        <h5 className='business-description-header'>Business Description</h5>
                            {/*<p className='business-profile-description'>{businessProfile.business_description}</p>*/}
                            
                            {/*<p><ReadMoreReact className='business-profile-description' text={businessProfile.business_description}/></p>*/}
                            <ReactMarkdown className='business-profile-description' children={businessProfile.business_description}/>
                                  
                                
                        
                    </div>

                    <div className='lower-card3'>
                    <h5 className='rating-header'>Reviews</h5>
                            {businessProfile.ratings.map((rating)=>(
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
                            ))}
                    </div>
                </div> :  <div className='loader-wraper-bg'><img className ='loader-gif' src ='../../images/loader.gif' /></div>

                


                }
                
        </div>
    )
}

export default BusinessProfile