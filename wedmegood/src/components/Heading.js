import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Heading = () => {
  return (
    <div className=" m-auto" style={{width:'85%'}}>
      <div className="mt-5 ">
        <h4 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Popular Venue Searches
        </h4>
      </div>
    </div>
  );
};
 export const Heading1 = () => {
    return (
      <div className="m-auto" style={{width:'85%'}}>
        <div className="">
          <h4 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Popular Searches
          </h4>
        </div>
      </div>
    );
  };
  export const Heading2 = () => {
    return (
      <div className="m-auto" style={{width:'85%'}}>
        <div className="d-flex justify-content-between mb-3">
          <h4 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Wedding Categories
          </h4>
          <p className="heading2" style={{color:'#E72E77',cursor:'pointer'}}>View all Categories<RiArrowRightSLine /> </p>
        </div>
      </div>
    );
  };
  export const Heading3 = () => {
    return (
      <div className="m-auto" style={{width:'85%'}}>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <h4 className="fw-bold" style={{ color: "#4A4A4A" }}>
          WMG Inhouse Services  
          </h4>
        </div>
      </div>
    );
  };
  export const Heading4 = () => {
    return (
      <div className="m-auto " style={{width:'85%'}}>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <h4 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Real Wedding Stories 
          </h4>
        </div>
      </div>
    );
  };
  export const Heading5 = () => {
    return (
      <div className="m-auto " style={{width:'85%'}}>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <h4 className="fw-bold" style={{ color: "#4A4A4A" }}>
          Gallery to Look for
          </h4>
        </div>
      </div>
    );
  };

export default Heading;

