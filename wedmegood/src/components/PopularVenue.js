import React from 'react'
import '../App.css'


const PopularVenue = ({title,img,dec}) => {
  return (
    <div className='w-75 m-auto'>
      <div className='mt-5 '>
       
      </div>
      <div className='mt-4'>
        <div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <h5>{title}</h5>
                <p>{dec}6</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PopularVenue
