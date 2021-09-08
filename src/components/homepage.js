import React, { useState, useEffect } from "react";
import CoverPage from "./coverpage";
import Menu from "./menu";
import RandomBusinesses from "./sponsored";




const Home = () =>{
    return (
        <div className='homepage-container'>
            <CoverPage />
            <Menu />
        </div>
    )
}




export default Home