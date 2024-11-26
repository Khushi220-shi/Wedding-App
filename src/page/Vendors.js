import React from "react";

const Photographers = ({ title1, sub1,title2, sub2,title3, sub3,title4, sub4, }) => {
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
        </div>
        <div className="type">
          <h6 className="fw-bold mt-3" style={{ color: "#E72E77" }}>
            {title4}
          </h6>

          {sub4?.map((val) => {
            return (
              <li>
                <a>{val}</a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Photographers;
