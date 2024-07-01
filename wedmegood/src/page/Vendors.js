import React from 'react'

const Photographers = ({title,sub}) => {
  return (
    <div>

      <div>
         
          <div className='type'>
          <h6 className='fw-bold mt-3' style={{color:'#E72E77'}}>{title}</h6>
             
             {
              sub?.map((val)=>{
                return (
                  <li><a>{val}</a></li>
                )
              })
             }
          </div>
          {/* <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title2}</h6>
              <li><a>{text2}</a></li>
              <li><a>{text21}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title3}</h6>
              <li><a>{text3}</a></li>
              <li><a>{text31}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title4}</h6>
              <li><a>{text4}</a></li>
              <li><a>{text41}</a></li>
              <li><a>{text42}</a></li>
              <li><a>{text43}</a></li>
              <li><a>{text44}</a></li>
              <li className='under'><a className='fw-bold 'style={{textDecoration:'none' ,color:'black'}}>{text45}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title5}</h6>
              <li><a>{text5}</a></li>
              <li><a>{text51}</a></li>
              <li><a>{text52}</a></li>
              <li className='under'><a className='fw-bold 'style={{textDecoration:'none' ,color:'black'}}>{text53}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title6}</h6>
              <li><a>{text6}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title7}</h6>
              <li><a>{text7}</a></li>
              <li><a>{text71}</a></li>
              <li><a>{text72}</a></li>
              <li><a>{text73}</a></li>
              <li className='under'><a className='fw-bold 'style={{textDecoration:'none' ,color:'black'}}>{text74}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title8}</h6>
              <li><a>{text8}</a></li>
              <li><a>{text81}</a></li>
              <li><a>{text82}</a></li>
              <li><a>{text83}</a></li>
              <li><a>{text84}</a></li>
              <li className='under'><a className='fw-bold 'style={{textDecoration:'none' ,color:'black'}}>{text85}</a></li>
           </div>
          </div>
          <div className='type'>
           <div className=''>
            <h6 className='fw-bold ' style={{color:'#E72E77'}}>{title9}</h6>
              <li><a>{text9}</a></li>
              <li><a>{text91}</a></li>
              <li><a>{text92}</a></li>
           </div>
          </div> */}
      </div>
    </div>
  )
}

export default Photographers
