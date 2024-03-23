import React from "react";
import exclusiveImg from "./Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="container offers-section my-3 h-auto">
      <div className="row justify-content-center align-items-center py-2">
        <div className="col-5 offers-left">
          <div className="row flex-column ">
            <h2 className="my-0">Exclusive</h2>
            <h2 className="text-nowrap">Offers For You</h2>
            <p className="mb-1 text-nowrap">ONLY ON BEST SELLING PRODUCTS</p>
            <h5 className="bg-warning text-nowrap ms-2">CHECK NOW</h5>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center ">
          <img src={exclusiveImg} className="offers-image" />
        </div>
      </div>
    </div>
  );
};
export default Offers;
