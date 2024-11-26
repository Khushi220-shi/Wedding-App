import React from 'react'
import mobile from '../assets/mobile/mobile.webp'
import { HiLightBulb } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import '../App.css'
import { FaClipboardCheck } from "react-icons/fa6";
import { RiAppleFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
// import india from '../assets/india.png'
import Cities from './Cities';
const MobileApp = () => {
  return (
    <div className='m-auto mt-5 mb-5' style={{width:'85%'}}>
        <div style={{backgroundColor:'#FFD3CC'}}>
            <div className='d-flex justify-content-around'style={{padding:'20px',paddingTop:'50px'}}>
                <div>
                    <h5 className='fw-bold' style={{color:'#4A4A4A',letterSpacing:'1px'}}>Download The WedMeGood Mobile App Today!</h5>
                    <div style={{color:'#E72E77'}} className='d-flex gap-4 mt-4 mb-4'>
                        <div className='d-flex gap-2'>
                            <HiLightBulb style={{fontSize:'25px'}}/>
                            <p className='fw-semibold'>Save Wedding Ideas</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <FaHeart style={{fontSize:'25px'}}/>
                            <p className='fw-semibold'>Shortlist Vendors</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <FaClipboardCheck style={{fontSize:'25px',rotate:'-20deg'}}/>
                            <p className='fw-semibold'>Get Free Wedding Checklist</p>
                        </div>
                    </div>
                    <p className='fw-semibold' style={{color:'#4A4A4A'}}>You will receive an <span className='fw-bold'>SMS</span> with a link to download the App</p>
                    <Cities />
                    <div className='mt-4'>  
                        <button className='btn download rounded-pill  text-light text-center fw-bold ' style={{background:'#E72E77',margin:'15px 0px',width:'250px',height:'50px'}}>Download the App</button>
                    </div>
                    <div className='row mt-2'>
                        <div style={{textAlign:'left',width:'250px',fontSize:'35px',gap:'12px'}} className='d-flex justify-content-center align-items-center'>
                        <RiAppleFill/>
                        <DiAndroid/>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={mobile} style={{height:'400px',width:'250px'}}alt='..'></img>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MobileApp
