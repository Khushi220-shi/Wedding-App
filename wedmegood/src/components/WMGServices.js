import Button from './Button'
import React from 'react'

const WMGServices = ({img,title,text}) => {
  return (
    <div>
        <div style={{width:'500px',textAlign:'center',backgroundColor:'white'}}>
            <div className=' p-3'>
                <div className='zoom'>
                <img src={img}></img>
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
