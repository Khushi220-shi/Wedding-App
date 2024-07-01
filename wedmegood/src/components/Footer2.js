import React from 'react'
import Planning from './Planning'
import { home, idea, maker, photo, planning } from '../data'
import Idea from './Idea'
import Photo from './Photo'
import All from './All'
import Maker from './Maker'
const Footer2 = () => {
  return (
    <div className='d-flex justify-content-between mt-5 pb-5'>
      <div>
      <h5 className='fw-bold mb-3'>Start Planning</h5>
        {
            planning.map((value)=>{
               return(
               <div>
                 <Planning
                text={value.text}
                 />
               </div>
               )
            })
        }
      </div>
      <div>
      <h5 className='fw-bold mb-3'>Wedding Ideas</h5>
        {
            idea.map((value)=>{
               return(
               <div>
                 <Idea
                text={value.text}
                 />
               </div>
               )
            })
        }
      </div>
      <div>
      <h5 className='fw-bold mb-3'>Photos Gallery</h5>
        {
            photo.map((value)=>{
               return(
               <div>
                 <Photo
                text={value.text}
                 />
               </div>
               )
            })
        }
      </div>
      <div>
      <h5 className='fw-bold mb-3'>Home</h5>
        {
            home.map((value)=>{
               return(
               <div>
                 <All
                text={value.text}
                 />
               </div>
               )
            })
        }
      </div>
      <div>
      <h5 className='fw-bold mb-3'>Wedding Invitation Maker</h5>
        {
            maker.map((value)=>{
               return(
               <div>
                 <Maker
                text={value.text}
                 />
               </div>
               )
            })
        }
      </div>
    </div>
  )
}

export default Footer2
