import React, { useState, useEffect } from "react";
import '../css/menu.css'


const menus = [
    {id:1,icon:'images/call.png', menu:'call a police'},
    {id:2,icon:'images/top100.png', menu:'Top 100'},
    {id:3,icon:'images/airtel.png', menu:'Airtel'},
    {id:4,icon:'images/kwirs.png', menu:'KWIRS'},
    {id:5,icon:'images/loan.png', menu:'Get a Loan'},
    {id:6,icon:'images/grant.png', menu:'Grant for you'},
    {id:7,icon:'images/categories.png', menu:'Business Categories'},
    {id:8,icon:'images/award.png', menu:'Kwaralive award'},
    {id:9,icon:'images/insurance.png', menu:'Are you insured'}
]



const Menu = () =>{
    
    return(
        <>
        <div className='heading'>
            <h2 >POPULAR RIGHT NOW</h2>
            <hr className='divider'/>
        </div>
        
        <main className='main'>
                <div className='menu-list'>
                {menus.map((menu)=>(
                    <div key={menu.id}>
                        <div  className='activities'>
                            <img className='menu-images'  src = {menu.icon} />
                            <p className='menu-title'>{menu.menu}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </main>
        </>
        
        
    )
}

export default Menu