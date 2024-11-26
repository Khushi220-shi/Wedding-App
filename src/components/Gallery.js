import React from 'react'
import '../App.css'
import { gallery } from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 4.8,
        slidesToScroll: 1,
       
      };
  return (
    <div className='m-auto' style={{width:'85%'}}>
        <div className='mt-5 mb-5'>
           <Slider {...settings}>
           {
                gallery.map((value)=>(
                    <div className='' >
                        <div className='bg-white p-2 m-1 rounded-3' style={{width:'240px',cursor:'pointer'}}>
                        <div className='zoom'>
                            <img src={value.img} className='rounded-3' style={{objectFit:'cover',width:'225px',height:'200px'}}></img>
                        </div>
                        <div className='mt-3'>
                            <h6 className='fw-bold text-center gallery'>{value.title}</h6>
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

export default Gallery
