import handicon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import React from "react";
import heroImage from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="container-fluid herosection">
      <div className="row justify-content-center  align-items-center py-2">
        <div className="col-4 hero-left ">
          <div className="row flex-column  ">
            <h2 className="my-0 text-nowrap ">NEW ARRIVALS ONLY</h2>
            <div className="d-flex ">
              <p className="my-0">new</p>
              <img src={handicon} className="handicon" alt=""></img>
            </div>
            <p className="my-0">collections</p>
            <p className="my-0 text-nowrap">for everyone</p>
            <button className="btn d-flex justify-content-center align-items-center btn-danger text-nowrap px-3 px-sm-5">
              Latest Collections
              <span className="mx-1 mx-sm-2">
                <img src={arrow}></img>
              </span>
            </button>
          </div>
        </div>
        <div className="col-4">
          <img src={heroImage} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};
export default Hero;
