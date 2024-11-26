import React from 'react'

const Photo = ({text}) => {
  return (
    <div>
      <a style={{fontSize:'14px',lineHeight:'35px',cursor:'pointer' }}>{text}</a>
    </div>
  )
}

export default Photo
