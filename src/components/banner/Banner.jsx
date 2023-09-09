import React from 'react'
import './Banner.css'
import { bannerData } from '../../data';
import { Carousel } from 'react-bootstrap';



const Banner = () => {
  return (
    <div>
 <Carousel variant='dark' className='carousel'>
    {bannerData.map((data)=>(
      <Carousel.Item>
      <div className="carousel-content">
        <h1 className='animate__animated animate__backInDown'>{data.text}</h1>
      
        {data.button&& <button className='animate__animated  animate__backInUp bannerBtn' onClick={()=> window.location.replace(data.link)}>{data.btn_name}</button>}
        
      </div>
    </Carousel.Item>
    ))}

    </Carousel>
        
    </div>
  )
}

export default Banner