import React from 'react';


const SearchBusinessForm = ({ userInput }) =>{
    return(
        <form>
            <input type='text' required value={userInput}></input>
            <input type='submit'></input>
        </form>
    )
}

export default SearchBusinessForm