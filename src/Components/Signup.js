import React from "react";
const Signup = () => {
  return (
    <div className="container signup-container">
      <div className="row justify-content-center h-auto py-5">
        <div className="col-8 col-xs-6 col-sm-6 col-md-6 bg-light py-3">
          <div className="row flex-column align-items-center ">
            <div className="col text-center my-1 my-sm-2 ">
              <h1>Sign Up</h1>
            </div>
            <div className="col mt-1 mt-sm-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              ></input>
            </div>
            <div className="col my-1 my-sm-2">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              ></input>
            </div>
            <div className="col mb-1 mb-sm-2">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password"
              ></input>
            </div>
            <div className="col mb-1 mb-sm-2 text-center">
              <button className="btn btn-danger text-white w-50">
                Continue
              </button>
            </div>
            <div className="col mb-1 mb-sm-2">
              <p className="m-0">
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
            <div className="col d-flex justify-content-start align-items-center mb-1 mb-sm-2">
              <input
                type="checkbox"
                className="form-check-input me-2 border-black"
              ></input>
              <label className="form-check-label">
                By continuing, I agree to the terms and conditions
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
