import React from 'react'
import { review } from '../../data'

const LatestReview = () => {
  return (
    <div>
      <h3 className='mt-5 fw-bold mb-4'>Latest Reviews</h3>
      <div className=''>
        {review.map((value)=>{
            return(
                <div className='d-flex my-3 bg-light p-4 rounded-3'>
                    <div className='me-5'>
                        <img src={value.img} className='rounded-circle' style={{width:'100px',height:'100px'}}></img>
                    </div>
                    <div>
                        <h5 className='fw-bold'>{value.title}</h5>
                        <p>{value.text}</p>
                        <p className='text-secondary mt-3'>{value.honor}</p>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default LatestReview
