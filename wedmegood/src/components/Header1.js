import React, { useContext } from "react";
import "../App.css";
import "../components/header.css";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import Login from "../page/Login";
import Venues from "../page/Venues";
import Vendors from "../page/Vendors";
import { FaCircleUser } from "react-icons/fa6";
import Blog from '../page/Blog'
import Shop from "../page/Shop";
import Invitation from "../page/Invitation";
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
  Vendor1,
  Vendor2,
  Vendor3,
  Vendor4,
  photo1,
  photo2,
  photo3,
  real,
  real1,
  real2,
  real3,
  blog1,
  blog2,
  blog3,
  blog4,
  shop1,
  shop2,
  shop3,
  invitation,
} from "../data";
import { useNavigate } from "react-router-dom";
import AuthContext from "../page/AuthContext";
import { Link } from "react-router-dom";
import Photo from "../page/Photo";
import RealWedding from "../page/RealWedding";


const Header1 = () => {
  const Navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);
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
                    <div className="d-flex justify-content-around">
                      <div>
                        {Vendor1.map((value) => {
                          return (
                            <Vendors title1={value.title} sub1={value.sub} />
                          );
                        })}
                      </div>
                      <div>
                        {Vendor2.map((value) => {
                          return (
                            <Vendors title2={value.title} sub2={value.sub} />
                          );
                        })}
                      </div>
                      <div>
                        {Vendor3.map((value) => {
                          return (
                            <Vendors title3={value.title} sub3={value.sub} />
                          );
                        })}
                      </div>
                      <div>
                        {Vendor4.map((value) => {
                          return (
                            <Vendors title4={value.title} sub4={value.sub} />
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
                  <div className="dropdown-menu " style={{ padding: "25px" }}>
                    <div className="d-flex justify-content-between">
                      <div>
                        {photo1.map((value) => {
                          return (
                            <Photo
                              title1={value.title}
                              sub1={value.sub}
                              dark={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {photo2.map((value) => {
                          return (
                            <Photo
                              title2={value.title}
                              sub2={value.sub}
                              dark1={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div style={{ marginRight: "150px" }}>
                        {photo3.map((value) => {
                          return (
                            <Photo
                              title3={value.title}
                              sub3={value.sub}
                              dark2={value.dark}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown4">
                  <a className="nav-link text-light" aria-disabled="true">
                    Real Weddings
                  </a>
                  <div className="dropdown-menu " style={{ padding: "25px" }}>
                    <div className="d-flex justify-content-between">
                      <div>
                        {real.map((value) => {
                          return (
                            <RealWedding
                              title1={value.title}
                              sub1={value.sub}
                              dark={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {real1.map((value) => {
                          return (
                            <RealWedding
                              title2={value.title}
                              sub2={value.sub}
                              dark1={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {real2.map((value) => {
                          return (
                            <RealWedding
                              title3={value.title}
                              sub3={value.sub}
                              dark2={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {real3.map((value) => {
                          return (
                            <RealWedding
                              title4={value.title}
                              img1={value.img}
                              text={value.text}
                              img2={value.img1}
                              text1={value.text1}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown5">
                  <a className="nav-link text-light" aria-disabled="true">
                    Blog
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        {blog1.map((value) => {
                          return (
                            <Blog
                              title1={value.title}
                              sub1={value.sub}
                              dark={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {blog2.map((value) => {
                          return (
                            <Blog
                              title2={value.title}
                              sub2={value.sub}
                              dark1={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {blog3.map((value) => {
                          return (
                            <Blog
                              title3={value.title}
                              sub3={value.sub}
                              dark2={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {blog4.map((value) => {
                          return (
                            <Blog
                              title4={value.title}
                              img1={value.img}
                              text={value.text}
                              img2={value.img1}
                              text1={value.text1}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown6">
                  <a className="nav-link text-light" aria-disabled="true">
                    Shop
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  >
                    <h5 className="fw-bold mt-3" style={{ color: "#E72E77" }}>Bridal Wear</h5>
                   <div className="d-flex justify-content-between">
                   
                      <div>
                       
                        {shop1.map((value) => {
                          return (
                            <Shop
                              title1={value.title}
                              sub1={value.sub}
                              dark={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div>
                        {shop2.map((value) => {
                          return (
                            <Shop
                              title2={value.title}
                              sub2={value.sub}
                              dark1={value.dark}
                            />
                          );
                        })}
                      </div>
                      <div style={{marginRight:'300px'}}>
                        {shop3.map((value) => {
                          return (
                            <Shop
                              title3={value.title}
                              sub3={value.sub}
                              dark2={value.dark}
                            />
                          );
                        })}
                      </div>
                      
                    </div> 
                  </div>
                </li>
                <li className="nav-item dropdown dropdown7">
                  <a className="nav-link text-light" aria-disabled="true">
                    E-invites
                  </a>
                  <div
                    className="dropdown-menu "
                    style={{ padding: "25px" }}
                  >
                    <div className="d-flex justify-content-between">
                   
                   <div>
                    
                     {invitation.map((value) => {
                       return (
                         <Invitation
                           title1={value.title}
                           sub1={value.sub}
                           dark={value.dark}
                         />
                       );
                     })}
                   </div>
                   </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div
            className="d-flex gap-4 me-5 "
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
            {/* <button
              className="btn rounded-pill px-5 text-light"
              style={{ backgroundColor: "#B4245D", cursor: "pointer" }}
              onClick={(e)=>{ e.preventDefault(); Navigate('/Login')}}>
              Log in
            </button> */}
            {isAuthenticated ? (
              <li style={{ listStyleType: "none" }}>
                {/* <button on  Click={logout}>Logout</button> */}
                {/* <button
                  className="btn rounded-pill px-5 text-light"
                  style={{ backgroundColor: "#B4245D", cursor: "pointer" }}
                  onClick={logout}
                >
                  LogOut
                </button> */}
                <div className="dropdown text-center">
                  <button
                    className="btn border-0 text-light "
                    style={{
                      color: "white",
                      fontSize:'30px',
                      cursor: "pointer",
                    }}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaCircleUser/>
                    
                  </button>
                  <ul className="dropdown-menu mt-4 rounded-0">
                    <li>
                      <a className="dropdown-item" href="#">
                        user name
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Join A Wedding 
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Setup Your Wedding
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                       Bookings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                       Download App
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item"  onClick={logout} href="#">
                      Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li style={{ listStyleType: "none" }}>
                {/* <Link to="/login">Login</Link> */}
                <button
                  className="btn rounded-pill px-5 text-light"
                  style={{ backgroundColor: "#B4245D", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    Navigate("/Login");
                  }}
                >
                  Log in
                </button>
              </li>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
