import React from 'react'

const WeddingCategory = ({title,text,img,backgroundColor}) => {
  return (
    <div className='col-6 mb-3'>
      <div style={{backgroundColor,width:'570px'}}>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='ms-3'>
          <h5 className='fw-bold'>{title}</h5>
          <p className='text-secondary' style={{fontSize:'12px'}}>{text}</p>
        </div>
        <div>
          <img src={img} style={{width:'250px' ,height:'120px'}} className='abc'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WeddingCategory
