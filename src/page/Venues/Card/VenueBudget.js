import React from "react";
import { venueBudget } from "../../../data";

const VenueBudget = () => {
  // Group the venueBudget items in pairs
  const pairs = [];
  for (let i = 0; i < venueBudget.length; i += 2) {
    pairs.push(venueBudget.slice(i, i + 2));
  }

  return (
    <div className="row my-5">
      <div className="col-12 bg-light rounded-3">
        {/* Render the title only once */}
        <h5 className="m-3 text-center fw-bold">Venue By Budget</h5>
        {pairs.map((pair, index) => (
          <div key={index} className="row mb-3 ">
            {pair.map((value, idx) => (
              <div key={idx} className="col-6 d-flex flex-column align-items-center">
                <img
                  src={value.img}
                  className="rounded-3 mb-2"
                  style={{ width: "50px", height: "50px" }}
                  alt={value.title}
                />
                <p style={{fontSize:'13px'}} className="text-center">{value.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueBudget;
