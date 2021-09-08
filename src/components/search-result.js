import React,{ useState, useEffect } from "react";
import SearchCard from './search_card'
import SearchBusinessForm from '../forms/search_form.js'


const Search =({query})=> {

    const [businesses, setMethod] = useState([])
    const [addInput, setInput] = useState('Israel')
    

    useEffect(()=>{
        fetch('/business/search?search='+query, {headers : {
            crossDomain:true, 
            'Accept': 'application/json'
        }
           })
           .then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then(data => setMethod(data.search_result))
    }, [])

    return (
        <div>
            <SearchCard businesses = {businesses} />
            <SearchBusinessForm userInput={addInput}/>
        </div>
    )
}

    


export default Search