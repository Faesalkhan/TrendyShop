import React from "react";
const NewsLetter = () => {
  return (
    <div className="container bg-warning my-4 py-4 rounded-3 newsletter-container">
      <div className="row flex-column align-items-center ">
        <div className="col-6">
          <h2 className="text-center text-nowrap ">
            Get Exclusive Offers on Email
          </h2>
        </div>
        <div className="col-6">
          <p className="text-center text-nowrap">
            Subscribe to our newsletter and stay updated
          </p>
        </div>
        <div className="col-5 d-flex align-items-center">
          <input className="form-control" placeholder="Your email id"></input>
          <button className="btn btn-dark text-white rounded-5 ms-2 fw-bold ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
