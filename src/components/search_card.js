import React from 'react';
import '../css/search_card.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SearchCard = ({businesses, query})=>{

    return (

        
            <div className='search-result-container'>
            
            {businesses.map((business)=>(
                    <main className='each-search-cont' key={business.id}>
                        <div  className='business-search-container'>
                            {/*<link rel='preload' href={business.logo}/>*/}
                            <img src={business.logo} className='business-logo'/>
                            <Link to={'/business-profile/' + business.id + '/'+Date.now()} className='business-name'>{business.business_name}</Link>
                            <div className='average-rating'>
                                <p className='rating-value'>{business.average_rating}</p>
                                <FaStar className='star'/>
                            </div>
                            
                        </div>
                    </main>
                    
                    ))
                    
            }
        </div>
        
        
    )
        
}

export default SearchCard