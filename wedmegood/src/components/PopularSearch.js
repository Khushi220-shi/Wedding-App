import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { search } from '../data';

const PopularSearch = ({img,text}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 4.5,
        slidesToScroll: 1,
       
      };
  return (
    <div className='m-auto mb-5' style={{width:'85%'}}>
      <div className='mt-5'>
      <Slider {...settings}>
        {
            search.map((value)=>(
                <div>
                <div style={{width:'250px'}}>
                <div className='zoom'>
                    <img src={value.img} className='rounded-3' style={{width:'250px',height:'300px'}}/>
                </div>
                </div>
                <div className='mt-2 text-secondary' style={{cursor:'pointer'}}>
                    <p className='search'>{value.text}</p>
                </div>
            </div>
            ))
        }
       
        </Slider>
      </div>
    </div>
  )
}

export default PopularSearch
