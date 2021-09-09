import React, { useEffect, useState } from 'react';
import SearchCard from './search_card'



const SearchInput=()=>{

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [searching, setSearching] = useState(false)
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'
    
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        setSearching(true)
        fetch(prod + '/v1/business/search?search='+query,{
            method: 'GET',
            headers:{
                'Content-type':'application/json',
                crossDomain:true       
            }
        }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data =>{
            setResult(data.search_result)
            setSearching(false)
        } )

        
                
    }
    return(
        <div className='main-cont'>
            <div className='form-cont'>
                <h2 className='search-heading'>FIND A BUSINESS TODAY</h2>

                <form onSubmit={handleSubmit} className='search-form'>
                    <input
                    type='text'
                    required 
                    value={query}
                    onChange = {(e)=>setQuery(e.target.value)} 
                    className='search-input'
                    />
                    <button><img className='search-button' src='images/search.png' alt=''/></button>
                </form>

                {result.length > 0 && <p className='search-counter'>{result.length} search results found for {query}</p>}
            </div>
            
            
            <SearchCard businesses = {result} query= {query} searching={searching}/>
            
        </div>
    )
}


const SearchPage=()=>{
    return(
        <div className='search-container'>
            
            <SearchInput />
        </div>
    )
}

export default SearchPage