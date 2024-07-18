import Breadcrump from '../Venues/Breadcrump'
import React from 'react'
import Header from './Header'
import City  from './City'
import MainCard from './Card/MainCard'

const Main = () => {
  return (
    <div className='m-auto my-5' style={{width:'85%'}}>
      <div>
        <Breadcrump/>
        <Header/>
        <City/>
        <MainCard/>
      </div>
    </div>
  )
}

export default Main
