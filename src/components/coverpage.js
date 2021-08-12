import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/coverpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const CoverPage = () =>{
    return(

        <div className='cover-page'>
            <Carousel controls={false} interval={3000} indicators= {false} fade={true}>
                <Carousel.Item >
                    <img className='d-block w-100' src='images/one.png' alt=''/>

                    <Carousel.Caption>
                        <div id='caption1'>
                            <div className='line'></div>
                            <Link id='call-to-action1' to='/sign-up'>Get started</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                {/*<Carousel.Item >
                    <img className='d-block w-100' src='images/two.png' alt=''/>

                    <Carousel.Caption>
                    <div id='caption2'>
                            <Link id='call-to-action2' to='/'>Get started</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>*/}

                <Carousel.Item >
                    <img className='d-block w-100' src='images/three.png' alt=''/>

                    <Carousel.Caption>
                    <div id='caption3'>
                            <div className='line'></div>
                            <Link id='call-to-action3' to='/sign-up'>register</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img className='d-block w-100' src='images/four.png' alt=''/>

                    <Carousel.Caption>
                    <div id='caption4'>
                            <div className='line'></div>
                            <Link id='call-to-action4' to='/sign-up'>register</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img className='d-block w-100' src='images/five.png' alt=''/>

                    <Carousel.Caption>
                    <div id='caption5'>
                            <div className='line'></div>
                            <Link id='call-to-action5' to='/sign-up'>register</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}

export default CoverPage