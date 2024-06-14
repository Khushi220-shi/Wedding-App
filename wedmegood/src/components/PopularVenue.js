import React from 'react'
import '../App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from '../data';



const PopularVenue = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className:"slides",
   
  };
  return (
    <div className=' m-auto mb-5' style={{width:'85%'}}>
      <div className='mt-5'>
      <Slider {...settings}>
        {popular.map((value)=>(
          <div className='d-flex'>
            <div>
            <img src={value.img} className='rounded-3 ' style={{width:'180px',height:'120px',cursor:'pointer'}}/>
            </div>
            <div className='ms-2 mt-2 me-5' style={{width:'500px'}}>
            <h6 className='fw-bold ' style={{color:'#333',width:'250px',cursor:'pointer'}}>{value.title}</h6>
            <p className='w-75 more ' style={{color:'#E72E77',cursor:'pointer'}}>{value.dec}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default PopularVenue
