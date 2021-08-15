import React from 'react';
import '../css/search_card.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';


const SearchCard = ({businesses, query, searching})=>{

    return (

        
         <div className='search-result-container'>
            
            {!searching > 0 ?  
            
            <div>
                {businesses.length > 0 && <p className='search-counter'>{businesses.length} search results found for {query}</p>}
                <div className='search-cont'>
                {
                        businesses.map((business)=>(
                            <main className='each-search-cont' key={business.id}>
                                <div  className='business-search-container'>
                                    <div className='average-rating'>
                                            <p className='rating-value'>{business.average_rating}</p>
                                            <FaStar className='star'/>
                                    </div>
                                    
                                    {business.logo ? <Image
                                     className='business-logo'
                                     publicId={business.logo}
                                     secure='true'
                                     cloud_name='daslnufbd' 
                                     loading='lazy'
                    
                                     
                                     >
                                        
                                        </Image> : <img src='../images/logo.jpg' className='business-logo'/>}
                                    <Link to={'/business-profile/' + business.id + '/'+Date.now()} className='business-name'>{business.business_name}</Link>
                                    
                                    
                                </div>
                            </main>
                            
                            ))
                    }
                </div>
                    
            </div>
             : 
             <div className='loader-wraper' id='search-loader'><img className ='loader' src ='../images/loader.gif' /></div>
        }
        </div>
            
    
        
        
    )
        
}

export default SearchCard