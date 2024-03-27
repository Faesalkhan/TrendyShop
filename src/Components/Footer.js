import React from "react";
import logo from "./Assets/logo.png";
import whatsapp_icon from "./Assets/whatsapp_icon.png";
import instagram_icon from "./Assets/instagram_icon.png";
import pintester_icon from "./Assets/pintester_icon.png";
const Footer = () => {
  return (
    <div className="container my-2 my-lg-4 footer-container">
      <div className="row flex-column align-items-center">
        <div className="col-6 d-flex align-items-center justify-content-center my-1">
          <img src={logo} className="img-fluid logo" />
          <h3 className="fw-bold bg-danger rounded-3 p-1">TRENDYSHOP</h3>
        </div>
        <div className="col-xs-12 col-sm-10 col-md-8 d-flex justify-content-center my-1 my-lg-2">
          <ul className="nav flex-nowrap  ">
            <li className="nav-item">
              <a className="nav-link">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Offices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-4 d-flex justify-content-evenly  ">
          <img src={pintester_icon} alt="" className="img-fluid pin" />
          <img src={whatsapp_icon} alt="" className="img-fluid what" />
          <img src={instagram_icon} alt="" className="img-fluid insta" />
        </div>
        <hr className="my-2 my-lg-4" />
        <div className="col-6">
          <p className="fw-light text-center text-nowrap">
            Copyright @2024 - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
