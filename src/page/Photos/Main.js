import React from 'react'
import Breadcrumb from './Bredcrump'
import Gallery from './Gallery'
import Search from './Search'
import Photo from './Photo'

const Main = () => {
  return (
    <div  >
        <div className='m-auto my-5' style={{width:'85%'}}>
          <Breadcrumb/>
          <Gallery/>
          <Search/>
        </div>
        <div className='m-auto my-5' style={{width:'95%'}}>
          <Photo/>
        </div>
    </div>
  )
}

export default Main
