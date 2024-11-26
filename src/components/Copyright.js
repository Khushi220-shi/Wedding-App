import React from 'react'
import logo from '../assets/logo.webp'
const Copyright = () => {
  return (
   <div style={{backgroundColor:'white'}}>
     <div  className='p-2 ' style={{backgroundColor:'#ededed' ,width:'100%'}}>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center' style={{paddingLeft:'100px'}}>
            <h6 className='me-5 mt-1'>© 2024</h6>
            <img src={logo} style={{width:'120px'}}></img>
          </div>
          <div style={{paddingRight:'100px'}}>
              <h6 className='fw-bold'>Terms & Conditions | Privacy Policy</h6>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Copyright
