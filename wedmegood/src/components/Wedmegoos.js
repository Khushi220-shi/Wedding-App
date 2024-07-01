import React from 'react'
import apple from '../assets/apple.png'
import play from '../assets/play.png'
const Wedmegoos = () => {
  return (
    <div>
      <div className='mt-5'>
        <img src={apple} style={{width:'200px'}}></img>
      </div>
      <div className='mt-4'>
      <img src={play} style={{width:'200px'}}></img>
      </div>
    </div>
  )
}

export default Wedmegoos
