import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blog } from '../data';
const Blog = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 2.9,
        slidesToScroll: 1,
       
      };
  return (
    <div className='m-auto' style={{width:'85%'}}>
      <div className='mt-5 mb-5'>
        <Slider {...settings}>
            {
                blog.map((value) =>(
                    <div>
                        <div className='rounded-3' style={{cursor:'pointer',width:'388px'}}>
                            <div className='zoom'>
                                <img src={value.img} className='rounded-3' style={{objectFit:'cover',width:'388px', height:'240px'}}></img>
                            </div>
                            <div className='bg-light p-3 rounded-bottom-3' style={{boxShadow:'1px 1px 5px 1px rgb(128,128,128,0.3)'}}>
                                <h6 className='fw-bold' style={{fontSize:'15px'}}>{value.title}</h6>
                                <p className=''style={{fontSize:'14px'}}>{value.des}</p>
                                <p className='text-secondary'style={{fontSize:'12px'}}>{value.date}</p>
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

export default Blog
