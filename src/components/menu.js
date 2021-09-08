import React, { useState, useEffect } from "react";
import '../css/menu.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';




const menus = [
    {id:1,icon:'images/call.png', menu:'call a police', link:'/'},
    {id:2,icon:'images/top100.png', menu:'Top 100', link:'/'},
    {id:3,icon:'images/airtel.png', menu:'Airtel', link:'/'},
    {id:4,icon:'images/kwirs.png', menu:'KWIRS', link:'/'},
    {id:5,icon:'images/loan.png', menu:'Get a Loan', link:'/'},
    {id:6,icon:'images/grant.png', menu:'Grant for you', link:'/'},
    {id:7,icon:'images/categories.png', menu:'Business Categories', link:'/'},
    {id:8,icon:'images/award.png', menu:'Kwaralive award', link:'/'},
    {id:9,icon:'images/insurance.png', menu:'Are you insured', link:'/'},
    {id:10,icon:'images/search.png', menu:'search', link:'/search'},
    {id:11,icon:'images/download.png', menu:'mobile app ', link:'/'}
]





const Menu = () =>{
    const [categories, setCategories] = useState([])
    const [isFetching, setFetching] = useState(true)
    const [topBusinesses, setTopBusinesses] = useState([])
    const [isFetchingBusinesses, setFetchingBusinesses] = useState(true)
    const prod = 'https://kwaralive.herokuapp.com'
    const local = 'http://localhost:5000'

    useEffect(()=>{
        fetch(prod+'/v1/business-categories', {headers : {
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
                    setCategories(data.categories)
                    setFetching(false)
                    
                    
                })
            
    }, [])

    useEffect(()=>{
        
        fetch(prod+'/v1/business/top-100', {headers : {
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
                    setTopBusinesses(data.top_100)
                    setFetchingBusinesses(false)
                    console.log(topBusinesses)
                    
                })
            
    }, [])

    return(
        <>
        <div className='heading'>
            <h2>POPULAR RIGHT NOW</h2>
            <hr className='divider'/>
        </div>

        
            <main className='main'>
                    <div className='menu-list'>
                    {menus.map((menu)=>(
                        <div key={menu.id}>         
                                <div  className='activities'>
                                    <Link to={menu.link}><img className='menu-images'  src = {menu.icon} alt=''/></Link>
                                    <Link to={menu.link} className='menu-title'>{menu.menu}</Link>
                                </div>
                            
                        </div>
                    ))}
                </div>
            </main>
        
        
        

        <div className='heading'>
            <h2>TOP CATEGORIES FOR YOU</h2>
            <hr className='divider'/>
        </div>
        
        {!isFetching ?  
            <div className='category-wrapper'>
                {categories.slice(0,8).map((data)=>(
                    <div key={data.id} className='categories'>
                        <p>{data.category}</p>
                    </div>
                ))}
            </div> : <div className='loader-wraper'><img className ='loader' src ='../images/loader.gif' /></div>}


            <div className='heading'>
            <h2>TOP BUSINESSES FOR YOU</h2>
            <hr className='divider'/>


            {!isFetchingBusinesses ?
            <div className='top-businesses'>
                    <Carousel wrap={true} indicators={false} fade={true} interval={3500}>
                {topBusinesses.map((business)=>(
                    <Carousel.Item key={business.id}>
                        {
                            business.logo ? <img className='d-block w-400 top-business-logo' src={business.logo} alt=''/> : 
                            <img className='d-block w-400 top-business-logo' src='images/logo.jpg'/>
                        }
                    

                    <Carousel.Caption>
            
                        <Link className='business-name '  to={'/business-profile/' + Date.now().toString().slice(0,5) + business.id + Date.now().toString().slice(5,11) + '/'+ business.business_name} className='business-name'><h4>{business.business_name}</h4></Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel> 
            </div>  : <div className='loader-wraper'><img className ='loader' src ='../images/loader.gif' /></div>}
            

            
                
            

        </div>
 
        </>
        
        
    )
}

export default Menu