import React, { useState, useEffect } from "react";


const BusinessProfile=({businessId})=>{
    const [businessProfile, setProfile] = useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(()=>{
        fetch('/business/search?id='+businessId, {headers : {
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
            
    }, [])

    {

        !isFetching ? 

        <div className='business-profile-wrapper'>
            <div className='upper-card'>
                    <img src={businessProfile.image_url}/>
                    <h3>{businessProfile.category}</h3>
                    <div><img src='../images/location.png'/><p>{businessProfile.address}</p></div>
            </div>
        </div> : <p>Fetching Profile</p>
    
    }
}