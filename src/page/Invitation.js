import React from 'react'

const Invitation = ({
    title1,
    sub1,
  }) => {
  return (
    <div>
       <div className="">
        <div className="type">
          <h6 className="fw-bold mt-3" style={{ color: "#E72E77" }}>
            {title1}
          </h6>

          {sub1?.map((val) => {
            return (
              <li>
                <a>{val}</a>
                
              </li>
            );
          })}
        
        </div>
      </div>
    </div>
  )
}

export default Invitation
