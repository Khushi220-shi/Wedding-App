import React from "react";
import { weddingPhotos } from "../../data";
import '../../App.css';

const Photo = () => {
  return (
    <div className="photo-container mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {weddingPhotos.map((value, index) => (
          <div className="col" key={index}>
            <div className=" h-100">
              <img src={value.img} className="card-img-top" alt={value.title} />
              <div className="">
                <h6 className="card-title fw-bold mt-3" style={{ fontSize: "15px" }}>
                  {value.title}
                </h6>
                <p className="card-text" style={{ color: "#E72E77", fontSize: "14px" }}>
                  {value.text}
                </p>
                <small
                  className="text-secondary"
                  style={{ fontSize: "12px", width: "250px" }}
                >
                  {value.des}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;
