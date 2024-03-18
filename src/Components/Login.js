import React from "react";
const Login = () => {
  return (
    <div className="container login-container">
      <div className="row justify-content-center py-5 loginrow h-auto ">
        <div className="col-5 bg-light py-3">
          <div className="row flex-column align-items-center">
            <div className="col text-center my-1 my-sm-2 ">
              <h1>Login</h1>
            </div>
            <div className="col my-1 my-sm-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="col my-1 my-sm-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              ></input>
            </div>
            <div className="colmy-1 my-sm-2 text-center">
              <button className="btn btn-danger w-50 fw-bold  ">
                Continue
              </button>
            </div>
            <div className="col mb-1 mb-sm-2">
              <p className="m-0">
                Don't have account?
                <a href="/signup" className="text-decoration-none ">
                  Click here
                </a>
              </p>
            </div>
            <div className="col d-flex justify-content-start align-items-center mb-1 mb-sm-2">
              <input
                type="checkbox"
                className="form-check-input me-2 border-black"
              ></input>
              <label className="form-check-label text-nowrap">
                By continuing, I agree to the terms and conditions
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
