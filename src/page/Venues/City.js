import React from 'react'
import { city } from '../../data'

const City = () => {
  return (
    <div>
        <div className='d-flex justify-content-between mt-5'>
            {city.map((value) =>{
                return(
                    <>
                        <div style={{cursor:'pointer'}}>
                            <div >
                                <img src={value.img} className='rounded-circle' style={{width:'80px',height:'80px'}}></img>
                            </div>
                            <div>
                                <p className='text-center mt-2 ' style={{fontSize:'14px'}}>{value.text}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            <div style={{cursor:'pointer'}}>
                <p className='rounded-circle bg-secondary d-flex align-items-center justify-content-center fw-bold' style={{width:'80px',height:'80px'}}>+40</p>
            </div>
        </div>
    </div>
  )
}

export default City
