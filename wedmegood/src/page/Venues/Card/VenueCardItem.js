import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaHotel, FaRupeeSign } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";

const VenueCardItem = ({ value }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Set the main image as the first image initially or the hovered image if available
  const mainImage = hoveredImage ? hoveredImage : value.img;

  return (
    <div className="bg-white rounded-3 mb-4">
      <div className="d-flex justify-content-between p-3">
        <div>
          <img
            src={mainImage}
            alt="main"
            style={{
              width: "280px",
              height: "180px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="mt-3 w-100 ms-3">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold" style={{ fontSize: "18px" }}>
              {value.title}
            </h5>
            <p style={{ fontSize: "13px" }}>
              <span>
                <FaStar className="me-2" style={{ color: "#E72E77" }} />
              </span>
              {value.rating}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <small style={{ fontSize: "13px" }}>
              <span>
                <FaMapMarkerAlt className="me-2" />
              </span>
              {value.location}
            </small>
            <small style={{ fontSize: "13px" }}>
              <span>
                <FaHotel className="me-2" />
              </span>
              {value.venue}
            </small>
            <small style={{ fontSize: "13px" }}>
              <span>
                <MdGroups2 className="me-2" />
              </span>
              {value.capacity}
            </small>
          </div>
          <div className="d-flex">
            <div>
              <small style={{ fontSize: "13px" }}>Veg</small>
              <p>
                <span>
                  <FaRupeeSign />
                </span>
                <span className="fw-bold me-2">{value.veg}</span>
                <small style={{ fontSize: "13px" }}>Per Plate</small>
              </p>
            </div>
            <div className="ms-5">
              <small style={{ fontSize: "13px" }}>Non Veg</small>
              <p>
                <span>
                  <FaRupeeSign />
                </span>
                <span className="fw-bold me-2">{value.nonVeg}</span>
                <small>Per Plate</small>
              </p>
            </div>
          </div>
          <div className="d-flex" style={{ fontSize: "13px" }}>
            <p
              className="mx-3 p-1 text-center"
              style={{ backgroundColor: "#ededed" }}
            >
              {value.room}
            </p>
            <p
              className="me-3 p-1"
              style={{ backgroundColor: "#ededed" }}
            >
              Indoor
            </p>
            <p
              className="me-3 p-1"
              style={{ backgroundColor: "#ededed" }}
            >
              Outdoor
            </p>
            <p className="me-3 p-1">+3 more</p>
          </div>
          <div style={{ fontSize: "13px" }}>
            <small>{value.text}</small>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between p-3">
        <div>
          {[value.image1, value.image2, value.image3, value.image4].map(
            (image, idx) => (
              <img
                key={idx}
                className="me-3"
                src={image}
                alt={`thumbnail-${idx}`}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredImage(image)}
                // onMouseLeave={() => setHoveredImage(null)}
              />
            )
          )}
        </div>
        <div>
          <button className="vendor-button2 me-3">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default VenueCardItem;
