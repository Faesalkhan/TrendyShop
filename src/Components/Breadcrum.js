import React from "react";
import breadcrum_arrow from "./Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";
const Breadcrum = ({ product }) => {
  return (
    <div className="col-12 my-3 breadcrum ">
      <h6>
        <Link to="/">Home</Link> <img src={breadcrum_arrow} alt="" />
        <Link to="/">Shop</Link>
        <img src={breadcrum_arrow} alt="" />{" "}
        <Link to={`/${product.category}`}>{product.category}</Link>
        <img src={breadcrum_arrow} alt="" /> {product.name}
      </h6>
    </div>
  );
};
export default Breadcrum;
