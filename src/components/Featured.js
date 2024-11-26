import React from 'react'
import Slider from 'react-slick'
import { featured } from '../data'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const Featured = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 3.5,
    slidesToScroll: 1,
   
  };
  return (
    <div className='m-auto' style={{width:'85%'}}>
        <div className='mt-5 mb-5'>
          <Slider {...settings}>
            {
              featured.map((value)=>(
                <div>
                  <div className='rounded-3' style={{width:'325px',cursor:'pointer'}}>
                    <div className=''>
                        <span class="badge  position-absolute p-2" style={{marginLeft:'260px',marginTop:'10px',fontSize:'15px',backgroundColor:'#5BA829'}}><FaStar /> {value.star}</span>
                        <img src={value.img} className='rounded-3' style={{objectFit:'cover',width:'325px',height:'190px'}}></img>
                    </div>
                    <div className='m-3'>
                      <h6 className='fw-bold'>{value.title}</h6>
                      <p className='text-secondary'>{value.des}</p>
                      <p className='fw-bold mt-1' style={{color:'#E72E77'}}>{value.price}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
    </div>
  )
}

export default Featured
