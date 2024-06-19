import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { realWedding } from '../data';
const RealWedding = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
       
      };
  return (
    <div className='m-auto mb-5' style={{width:'85%'}}>
      <div className='mt-3'>
      <Slider {...settings}>
        {
            realWedding.map((value)=>(
               <div style={{ }}>
                    <div className='d-flex justify-content-center  rounded-3'style={{width:'380px',backgroundColor:'white',}}>
                    
                        <div className="card" style={{border:'none', boxShadow: 'rgba(0, 0, 0, 0.05) 1px 1px 5px 0px'}}>
                        {/*  */}
                        <div className='zoom' style={{borderRadius:'5px'}}>
                             <img src={value.img} className='card-img-top rounded-2 'style={{width:'380px',height:'220px'}} alt="..."/>
                        </div>
                        <div className='card-body' >
                            <p className='fw-bold' style={{color:'#4A4A4A'}}>{value.title}</p>
                            <p style={{color:'#4A4A4A',fontFamily:'proxima',fontSize:'15px'}}>{value.dec}</p>
                            <p className='text-secondary' style={{fontSize:'13px'}}>{value.date}</p>
                        </div>
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

export default RealWedding
