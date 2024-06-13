import React from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";

const Header1 = () => {
  return (
    <div>
        <div style={{backgroundColor:'#E72E77'}} className="d-flex justify-content-between">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <img className="navbar-brand p-2 ps-5" src={logo} href="#" />
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
                  <ul className="navbar-nav gap-4">
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Venues
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Vendors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" href="#">
                        Photos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" aria-disabled="true">
                        Real Weddings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" aria-disabled="true">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" aria-disabled="true">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" aria-disabled="true">
                        E-invites
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div>
                <div className="d-flex gap-5 me-3 " style={{alignItems:'center',marginTop:'10px'}}>
                    <IoSearch style={{color:'white', fontSize:'30px',backgroundColor:'#B4245D',cursor:'pointer'}} className="rounded-5 p-1"/>
                    <button className="btn rounded-pill px-5 text-light"  style={{backgroundColor:'#B4245D',cursor:'pointer'}}>Log in</button>
                </div>
            </div>
          </div>
    </div>
  );
};

export default Header1;
