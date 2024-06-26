import React from "react";
import data from "./Assets/data";
import Item from "./Item";
const Popular = () => {
  return (
    <div className="container polularContainer">
      <h2 className="text-center text-nowrap my-2 my-sm-3  my-lg-5  text-decoration-underline ">
        POPULAR IN WOMEN
      </h2>
      <div className="row justify-content-center popular-row">
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Popular;
