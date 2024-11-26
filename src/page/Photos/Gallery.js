import React from 'react'
import '../../App.css'
import { gallery } from '../../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 6.6,
        slidesToScroll: 1,
       
      };
  return (
    <div className='m-auto' style={{}}>
        <div className=' mb-5'>
           <Slider {...settings}>
           {
                gallery.map((value)=>(
                    <div className='' >
                        <div className='bg-white p-2 m-1 rounded-3' style={{width:'165px',cursor:'pointer'}}>
                        <div className='zoom'>
                            <img src={value.img} className='rounded-3' style={{objectFit:"",width:'165px',height:'135px'}}></img>
                        </div>
                        <div className='mt-3'>
                            <h6 className='fw-bold text-center gallery' style={{fontSize:'12px'}}>{value.title}</h6>
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
