import handicon from "../Assets/hand_icon.png";
import React from "react";
import heroImage from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="container-fluid herosection">
      <div className="row justify-content-center align-items-center py-2">
        <div className="col-4 hero-left ">
          <div className="row flex-column  ">
            <h2 className="my-0 py-1 text-nowrap bg-danger d-flex justify-content-center boss">
              BEST OF SEASON COLLECTION
            </h2>
            <div className="d-flex ">
              <img src={handicon} className="handicon" alt=""></img>
            </div>
            <p className="my-0">All Season Festivals in Styles</p>
            <p className="my-0 text-nowrap">minimum 50% off</p>
            <h2 className="bg-warning w-25 ms-2 fw-bold text-nowrap py-1 d-flex justify-content-center ">
              Shop Now
            </h2>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center ">
          <img src={heroImage} className="hero-image"></img>
        </div>
      </div>
    </div>
  );
};
export default Hero;
