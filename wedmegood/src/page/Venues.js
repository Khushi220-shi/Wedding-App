import React from 'react'
import goa from '../assets/venues/goa.webp'
import jaipur from '../assets/venues/jaipur.webp'
import udaipur from '../assets/venues/udaipur.webp'
import jodhpur from '../assets/venues/jodhpur.webp'
import thailand from '../assets/venues/thailand.webp'
import jim from '../assets/venues/jim.webp'
const Venues = () => {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='type'>
            <h6 className='fw-bold' style={{color:'#E72E77'}}>By Type</h6>
            <li><a>Banquet Halls</a></li>
            <li><a>Lawns / Farmhouses</a></li>
            <li><a>Wedding Resorts</a></li>
            <li><a>Small Function / Party Halls</a></li>
            <li><a>Destination Wedding Venues</a></li>
            <li><a>Kalyana Mandapams</a></li>
            <li><a>4 Star & Above Wedding Hotels</a></li>
            <li className='under'><a className='fw-bold 'style={{textDecoration:'none' ,color:'black'}}>View all Venues</a></li>
        </div>
        <div className='type'>
            <h6 className='fw-bold' style={{color:'#E72E77'}}>By City</h6>
            <li><a>Mumbai</a></li>
            <li><a>Bangalore</a></li>
            <li><a>Pune</a></li>
            <li><a>Kolkata</a></li>
            <li><a>Jaipur</a></li>
            <li><a>Lucknow</a></li>
            <li><a>Hyderabad</a></li>
            <li className='under'><a className='fw-bold 'style={{textDecoration:'none' ,color:'black'}}>More</a></li>
        </div>
        <div>
            <h6>Destination Wedding Venues</h6>
            <div>
                <div className='d-flex' style={{cursor:'pointer'}}>
                   <div>
                   <img src={goa} className='m-2' style={{width:'180px',height:'150px',borderRadius:'5px'}} ></img>
                   <p className='text-center venue-text'>Goa</p>
                   </div>
                   <div>
                   <img src={jaipur} className='m-2' style={{width:'180px',height:'150px',borderRadius:'5px'}}></img>
                   <p className='text-center venue-text'>Jaipur</p>
                   </div>
                    <div>
                    <img src={udaipur} className='m-2' style={{width:'180px',height:'150px',borderRadius:'5px'}}></img>
                    <p className='text-center venue-text'>Udaipur</p>
                    </div>
                </div>
                <div className=' d-flex'>
                   <div>
                   <img src={jodhpur} className='m-2' style={{width:'180px',height:'150px',borderRadius:'5px'}}></img>
                    <p className='text-center venue-text'>Jodhpur</p>
                   </div>
                    <div>
                    <img src={thailand} className='m-2' style={{width:'180px',height:'150px',borderRadius:'5px'}}></img>
                    <p className='text-center venue-text'>Thailand</p>
                    </div>
                    <div>
                    <img src={jim} className='m-2' style={{width:'180px',height:'150px',borderRadius:'5px'}}></img>
                    <p className='text-center venue-text'>Jim Corbett  </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Venues
