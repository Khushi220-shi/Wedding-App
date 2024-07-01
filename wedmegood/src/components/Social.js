import React from 'react'
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Social = () => {
  return (
    <div className='mt-3' style={{cursor:'pointer'}}>
      <div className='d-flex'>
            <TfiFacebook className='mt-1' style={{color:'#365899',fontSize:'20px'}}/>
            <p className='fw-bold ms-2'>Facebook</p>
      </div>
      <div className='d-flex mt-3'>
            <FaTwitter className='mt-2' style={{color:'#55ACEE',fontSize:'20px'}}/>
            <p className='fw-bold ms-2'>Twitter</p>
      </div>
      <div className='d-flex mt-3'>
            <FaPinterest className='mt-1' style={{color:'red',fontSize:'20px'}}/>
            <p className='fw-bold ms-2'>Pinterest</p>
      </div>
      <div className='d-flex mt-3'>
            <FaInstagram className='mt-1' style={{color:'red',fontSize:'20px'}}/>
            <p className='fw-bold ms-2'>Instagram</p>
      </div>
      <div className='d-flex mt-3'>
            <TfiYoutube className='mt-1' style={{color:'red',fontSize:'20px'}}/>
            <p className='fw-bold ms-2'>Youtube</p>
      </div>
    </div>
  )
}

export default Social
 