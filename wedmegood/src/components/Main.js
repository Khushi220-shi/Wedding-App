import React from 'react'
import '../App.css'
import { FaAngleDown } from "react-icons/fa";
const Main = () => {
  return (
    <div>
      <div className='wedding-img'>
        <div className='text-center'>
          <div className='image'>
          <h1 className='text-light fw-bold 'style={{paddingTop:'550px'}}>Your Wedding, Your Way</h1>
            <h5 className='text-light fw-medium'>Find the best wedding vendors with thousands of trusted reviews</h5>
            <div className="input-group mt-3" style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <div className="dropdown">
              <button className="btn btn-light text-secondary rounded-0 p-3" style={{width:'400px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Vendor type <span><FaAngleDown style={{color:'#E72E77',marginLeft:"200px"}}/></span>
              </button>
              <ul className="dropdown-menu " style={{width:'300px'}}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light text-secondary rounded-0 p-3" style={{width:'400px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select Vendor type <span><FaAngleDown style={{color:'#E72E77',marginLeft:"200px"}}/></span>
              </button>
              <ul className="dropdown-menu " style={{width:'300px'}}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
              <button className="input-group-button border-0 px-4 text-light "style={{backgroundColor:'#E72E77',cursor:'pointer'}}>Get Strated</button>
            </div>
            <div className='text-light fw-medium gap-3 mt-3' style={{display:'flex',justifyContent:'center'}}>
                <h6>Popular Searches:</h6>
                <p style={{cursor:'pointer',fontFamily:'italic'}}>Wedding Photographers in India | Bridal Makeup Artists in India | Wedding Cards in India | Wedding Venues in India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
