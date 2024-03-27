import React from "react";
import logo from "./Assets/logo.png";
import cartlogo from "./Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const totalCartItems = useSelector((item) => item.cart.totalQuantity);
  return (
    <div className="navbar navbar-light bg-light ">
      <div className="navbar-logo d-flex align-items-center ">
        <img src={logo} alt=""></img>
        <span>TRENDYSHOP</span>
      </div>
      <ul className="nav nav-underline ">
        <li className="nav-item">
          <Link to="/" className="nav-link mx-sm-2  mx-md-4 ">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/men" className="nav-link mx-sm-2  mx-md-4">
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/women" className="nav-link mx-sm-2  mx-md-4">
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/kid" className="nav-link mx-sm-2  mx-md-4">
            Kids
          </Link>
        </li>
      </ul>
      <div className="position-relative me-2 logincart">
        <Link to="/login">
          <button className="btn btn-light border-black fw-bold  rounded-5 me-md-3">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cartlogo} alt="" className="cart-items-count"></img>
        </Link>
        <span className="bg-danger badge rounded-pill position-absolute start-100 translate-middle  ">
          {totalCartItems}
        </span>
      </div>
    </div>
  );
};
export default NavBar;
