import Button from './Button'
import React from 'react'

const WMGServices = ({img,title,text}) => {
  return (
    <div className='col-6'>
        <div className='pb-5 mb-3' style={{width:'580px',textAlign:'center',backgroundColor:'white',borderRadius:'5px',boxShadow:'1px 1px 5px 1px rgb(128,128,128,0.3)'}}>
            <div className='p-3'>
                <div className='zoom' style={{borderRadius:'5px'}}>
                <img src={img} style={{height:'250px'}}></img>
                </div>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <Button/>
        </div>
    </div>
  )
}

export default WMGServices
