import React, { useState } from "react";
import Footer from "./Footer";

import Item from "./Item";
import { useSelector } from "react-redux";
const ShopCategory = ({ banner, category }) => {
  const all_products = useSelector((store) => store.cart.items);
  const [sortedProducts, setSortedProducts] = useState(all_products);

  const handleSort = (order) => {
    let sortedItems = [...sortedProducts];
    if (order === "lowtohigh") {
      sortedItems.sort((a, b) => a.new_price - b.new_price);
    } else if (order === "hightolow") {
      sortedItems.sort((a, b) => b.new_price - a.new_price);
    }
    setSortedProducts(sortedItems);
  };

  return (
    <div className="container-fluid shopCategory-container">
      <div className="row justify-content-center">
        <div className="col-10  ">
          <img src={banner} className="img-fluid" />
        </div>
        <div className="col-10 my-2">
          <div className="row justify-content-between align-items-center  ">
            <div className="col-6 ">
              <p className="m-0 showingtext">
                <span className="fw-bold">Showing 1-12 </span>
                out of {all_products.length} products
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end ">
              <button
                className="btn btn-light border-black rounded-5 mx-1 px-1"
                onClick={() => handleSort("lowtohigh")}
              >
                low to high⬇️
              </button>
              <button
                className="btn btn-light border-black rounded-5 mx-1 px-1"
                onClick={() => handleSort("hightolow")}
              >
                high to low⬇️
              </button>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
            {sortedProducts.map((item) => {
              if (item.category === category) {
                return <Item key={item.id} item={item} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ShopCategory;
