import React from "react";
import '../App.css'
const RealWedding = ({
  title1,
  sub1,
  dark,
  title2,
  sub2,
  title3,
  sub3,
  dark1,
  dark2,
  title4,
  img2,
  img1,
  text,
  text1,
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
          <li className="under">
            <a
              className="fw-bold  "
              style={{ textDecoration: "none", color: "black" }}
            >
              {dark}
            </a>
          </li>
        </div>
        <div className="type">
          <h6 className="fw-bold mt-3" style={{ color: "#E72E77" }}>
            {title2}
          </h6>

          {sub2?.map((val) => {
            return (
              <li>
                <a>{val}</a>
              </li>
            );
          })}
          <li className="under">
            <a
              className="fw-bold  "
              style={{ textDecoration: "none", color: "black" }}
            >
              {dark1}
            </a>
          </li>
        </div>
        <div className="type">
          <h6 className="fw-bold mt-3" style={{ color: "#E72E77" }}>
            {title3}
          </h6>

          {sub3?.map((val) => {
            return (
              <li>
                <a>{val}</a>
              </li>
            );
          })}
          <li className="under">
            <a className="fw-bold "
              style={{ textDecoration: "none", color: "black" }}>
              {dark2}
            </a>
          </li>
        </div>
        <div className="type">
          <h6 className="fw-bold mt-3" style={{ color: "#E72E77" }}>
            {title4}</h6>
           <div className="py-4">
           <img src={img1} className="header-img mb-2"></img>
            <br></br>
            <a>{text}</a>
           </div>
          <div>
          <img src={img2} className="header-img  mb-2" ></img>
            <br></br>
            <a>{text1}</a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealWedding;
