import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../css/business_profile.css'


const BusinessProfile=()=>{
    const [businessProfile, setProfile] = useState([])
    const [isFetching, setFetching] = useState(true)
    const { id } = useParams()

    useEffect(()=>{
        fetch(`/business/search?id=${id}`, {headers : {
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
                    console.log(businessProfile)
                    
                })
            
    }, [id])

    return(
        <div>


            {

                !isFetching ? 

                <div className='business-profile-wrapper'>
                    <div className='upper-card'>
                        <hr/>
                            {console.log(businessProfile.logo)}
                            <img className='business-logo' src={businessProfile.logo}/>
                            
                            <h3>{businessProfile.business_name}</h3>
                            <p className='business-profile-categories'>{businessProfile.category}</p>
                            <div className='address-wrapper'><img className='location' src='../../images/location.png'/><p>{businessProfile.address}</p></div>
                    </div>

                    <div className='lower-card'>
                        <p className='business-description-header'>Business Description</p>
                        <p className='business-profile-description'>{businessProfile.business_description}</p>
                        
                        <p className='rating-header'>Reviews</p>
                        {businessProfile.ratings.map((rating)=>(
                            <div key={rating.id}>
                                <div  className='ratings'>
                                    <div><p>{rating.rating_text}</p><p>{rating.reviewer}</p></div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div> :  <div className='loader-wraper'><img className ='loader' src ='../../images/loader.gif' /></div>

                }
        </div>
    )
}

export default BusinessProfile