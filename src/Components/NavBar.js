import React from "react";
import logo from "./Assets/logo.png";
import cartlogo from "./Assets/cart_icon.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar navbar-light bg-light ">
      <div className="navbar-logo d-flex align-items-center ">
        <img src={logo} alt=""></img>
        <span>SHOPPER</span>
      </div>
      <ul className="nav nav-underline ">
        <li className="nav-item">
          <Link to="/" className="nav-link mx-sm-2  mx-md-4 ">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/men" className="nav-link mx-sm-2  mx-md-4">
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/women" className="nav-link mx-sm-2  mx-md-4">
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/kids" className="nav-link mx-sm-2  mx-md-4">
            Kids
          </Link>
        </li>
      </ul>
      <div className="position-relative me-2 logincart">
        <Link to="/login">
          <button className="btn btn-primary rounded-5 me-md-3">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartlogo} alt="" className="img-fluid"></img>
        </Link>
        <span className="bg-danger badge rounded-pill px-1 position-absolute top-0 start-100 translate-middle ">
          99
        </span>
      </div>
    </div>
  );
};
export default NavBar;
