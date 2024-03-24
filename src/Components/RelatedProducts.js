import React from "react";
import data from "./Assets/data";
import Item from "./Item";
const RealetedProducts = () => {
  return (
    <div className="container realeted-container">
      <h2 className="text-center text-nowrap my-2 my-sm-3  my-lg-5  text-decoration-underline ">
        RELATED PRODUCTS
      </h2>
      <div className="row justify-content-center ">
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default RealetedProducts;
