import React from 'react';
import '../App.css';
import { IoCaretDown } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { RiMobileDownloadLine } from "react-icons/ri";

const Header = () => {
  return (
    <div style={{backgroundColor:'#B4245D', color:'white' ,fontSize:'12px',justifyContent:'space-between',alignItems:'center'}} className='d-flex'>
      <div className='d-flex'>
        <p style={{fontWeight:400 }} className='pt-3 ps-5'>India's Favourite Wedding Planning Platform</p>
        <div className="dropdown p-2" >
        <button className="btn btn-light ms-5"style={{width:'300px',height:'35px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          All Cities <span style={{marginLeft:'180px'}}><IoCaretDown/></span>
        </button>
        {/* <ul className="dropdown-menu">
                  
          <li>

          </li>
        </ul> */}
        <ul className="dropdown-menu dropdown-menu city-menu" style={{width:'1000px',lineHeight:'30px',border:'none'}} aria-labelledby="navbarDropdownMenuLink">
          <li>
            <div className="input-group mt-2 mx-2">
              <div className="form-outline ms-5 mb-4" style={{width:'85%'}}>
                <input type="search" id="search-input-dropdown" className="form-control " placeholder='Search City and State....' />
              </div>
            </div>
          </li>
         <div className='d-flex justify-content-around'>
         <div style={{padding:'20px'}}className='list'>
            <h6 style={{color:'#E72E77',fontWeight:'600',cursor:'none'}}>All Cities</h6>
            <li className=''>All cities</li>
            <li className=''>Delhi NCR</li>
            <li className=''>Mumbai</li>
            <li className=''>Puna</li>
            <li className=''>Kolkata</li>
            <li className=''>Lucknow</li>
            <li className=''>Jaipur</li>
            <li className=''>Bangalore</li>
            <li className=''>Hyderabad</li>
            <li className=''>Chennai</li>
          </div>
          <div style={{padding:'20px'}}className='list'>
            <h6 style={{color:'#E72E77',fontWeight:'600',cursor:'none'}}>Popular Cities</h6>
            <li className=''>Gurgaon</li>
            <li className=''>Goa</li>
            <li className=''>Udaipur</li>
            <li className=''>Ahmedabad</li>
            <li className=''>Chandigarh</li>
            <li className=''>Indore</li>
            <li className=''>Agra</li>
            <li className=''>Kanpur</li>
            <li className=''>Jodhpur</li>
            <li className=''>Kochi</li>
          </div>
          <div style={{padding:'20px'}}className='list'>
            <h6 style={{color:'#E72E77',fontWeight:'600',cursor:'none'}}>Other Cities</h6>
            <li className=''>Nagpur</li>
            <li className=''>Dehradun</li>
            <li className=''>Thane</li>
            <li className=''>Surat</li>
            <li className=''>Vadodara</li>
            <li className=''>Visakhapatnam</li>
            <li className=''>Raipur</li>
            <li className=''>Coimbatore</li>
            <li className=''>Ranchi</li>
            <li className=''>Mysore</li>
          </div>
          <div style={{padding:'20px'}} className='list'>
            <h6 style={{color:'#E72E77',fontWeight:'600',cursor:'none'}}>State</h6>
            <li className=''>Kerala</li>
            <li className=''>Rajasthan</li>
            <li className=''>Himachal Pradesh</li>
            <li className=''>Maharashtra</li>
            <li className=''><pre></pre></li>
            <li className=''style={{color:'#E72E77',fontWeight:'600',cursor:'none'}}>International Cities</li>
            <li className=''>Dubai</li>
            <li className=''>Thailand</li>
            <li className=''>Bali</li>
            <li className=''>Abu Dhabi</li>
          </div>
         </div>
        </ul>
      </div>
      </div>
      <div className='d-flex gap-4 me-5'>
        <div className='d-flex gap-2'>
          <PiNotePencilBold  style={{color:'white',fontSize:'20px'}}/>
          <p className='text-light fw-semibold'>Write A Review</p>
        </div>
        <div className='d-flex gap-2'>
          <RiMobileDownloadLine style={{color:'white',fontSize:'20px'}}/>
          <p className='text-light fw-semibold'>Download App</p>
        </div>
      </div>
    </div>
  )
}

export default Header
