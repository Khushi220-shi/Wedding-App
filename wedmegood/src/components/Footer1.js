import React from 'react'
import VenderButton from './VenderButton'

const Footer1 = () => {
  return (
    <div className='bg-light' style={{color:'#4A4A4A'}} >
      <div className='m-auto pt-5' style={{width:'85%'}}>
        <div>
            <h6 className='fw-bold' >WedMeGood - Your Personal Wedding Planner</h6>
            <p className='fw-medium lh-lg mt-3 mb-3 ' style={{fontSize:'14px'}}>Plan your wedding with Us</p>
            <p className='fw-medium lh-lg mb-5'  style={{fontSize:'14px'}}>WedMeGood is an Indian Wedding Planning Website and app where you can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India, or looking for the top photographers, or just some ideas and inspiration for your wedding. WedMeGood can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding anymore.</p>
        </div>
        <div className='d-flex justify-content-between'>
            <div style={{width:'450px'}}>
              <h6 className='fw-bold'>Contact us to get best deals</h6>
              <div className='d-flex justify-content-between'>
                <div className='mt-3'>
                  <p className='fw-bold' style={{fontSize:'14px'}}>For Vendors</p>
                  <p style={{fontSize:'14px'}}>vendors@wedmegood.com</p>
                  <p style={{fontSize:'14px'}}>0124-6812346</p>
                </div>
                <div>
                  <h1 className='vr' style={{height:'100px'}}></h1>
                </div>
                <div className='mt-3'>
                <p className='fw-bold' style={{fontSize:'14px'}}>For Users</p>
                  <p style={{fontSize:'14px'}}>info@wedmegood.com</p>
                  <p style={{fontSize:'14px'}}>0124-6812345</p>
                </div>
              </div>
              <div className='mt-3'>
                <h5 className='fw-bold'>Registered Address</h5>
                <h6 className='mt-3' style={{fontSize:'15px', lineHeight:'25px'}}>Second Floor, Ocus Technopolis, Sector 54 Golf <br></br> Course Road, Gurgaon, Haryana, India, 122002</h6>
              </div>
              <div className='mt-5'>

              </div>
            </div>
            <div>
              <h6 className='fw-bold'>Follow us on:</h6>
            </div>
            <div>
              <h6 className='fw-bold'>Get The WedMeGood App</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer1
