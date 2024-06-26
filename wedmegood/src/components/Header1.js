import React from "react";
import "../App.css";
import "../components/header.css";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import Login from "../page/Login";
import Venues from "../page/Venues";
import Vendors from "../page/Vendors";
import {
  Photographers,
  photo,
  makeup,
  preweddingshoot,
  planningdecor,
  bridalwear,
  groomwear,
  mehndi,
  jewelleryAccessories,
  invite,
  music,
  Vendor,
} from "../data";

const Header1 = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#E72E77" }}
        className="d-flex justify-content-between"
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img
              className="navbar-brand  ps-5"
              src={logo}
              style={{ width: "210px" }}
              href="#"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-3 ">
                <li className="nav-item dropdown  dropdown1">
                  <a className="nav-link text-light" href="#">
                    Venues
                  </a>

                  <div className="dropdown-menu" style={{ padding: "25px" }}>
                    <Venues />
                  </div>
                </li>
                <li className="nav-item dropdown dropdown2">
                  <a className="nav-link text-light" href="#">
                    Vendors
                  </a>
                  <div className="dropdown-menu" style={{ padding: "25px" }}>
                    <div className="d-flex">
                     <div>
                          {Vendor.map((value) => {
                            return (
                              <Vendors title={value.title} sub={value.sub} />
                            );
                          })}
                        </div>
                        </div>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown3">
                  <a className="nav-link text-light" href="#">
                    Photos
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  ></div>
                </li>
                <li className="nav-item dropdown dropdown4">
                  <a className="nav-link text-light" aria-disabled="true">
                    Real Weddings
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  ></div>
                </li>
                <li className="nav-item dropdown dropdown5">
                  <a className="nav-link text-light" aria-disabled="true">
                    Blog
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  ></div>
                </li>
                <li className="nav-item dropdown dropdown6">
                  <a className="nav-link text-light" aria-disabled="true">
                    Shop
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  ></div>
                </li>
                <li className="nav-item dropdown dropdown7">
                  <a className="nav-link text-light" aria-disabled="true">
                    E-invites
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div
            className="d-flex gap-4 me-3 "
            style={{ alignItems: "center", marginTop: "10px" }}
          >
            <IoSearch
              style={{
                color: "white",
                fontSize: "30px",
                backgroundColor: "#B4245D",
                cursor: "pointer",
              }}
              className="rounded-5 p-1"
            />
            <button
              className="btn rounded-pill px-5 text-light"
              style={{ backgroundColor: "#B4245D", cursor: "pointer" }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
