import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import all_products from "./Assets/all_product";
import Item from "./Item";
const ShopCategory = ({ banner, category }) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = all_products.filter(
      (prod) => prod.category === category
    );
    setSortedProducts(filteredProducts);
  }, [category]);

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
          <img src={banner} alt="category-banner.png" className="img-fluid" />
        </div>
        <div className="col-12 my-3">
          <div className="row justify-content-between align-items-center  ">
            <div className="col-5 col-md-5">
              <p className="m-0 showingtext">
                <span className="fw-bold">Showing 1-12 </span>
                out of {all_products.length} products
              </p>
            </div>
            <div className="col-6  col-md-5 d-flex justify-content-end ">
              <div className="row justify-content-evenly ">
                <div className="col-5">
                  <button
                    className="btn btn-light border-black rounded-5 mx-1 px-1 text-nowrap "
                    onClick={() => handleSort("lowtohigh")}
                  >
                    low to high⬇️
                  </button>
                </div>
                <div className="col-5">
                  <button
                    className="btn btn-light border-black rounded-5 mx-1 px-1 text-nowrap "
                    onClick={() => handleSort("hightolow")}
                  >
                    high to low⬇️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto">
          <div className="row justify-content-evenly shop-row">
            {sortedProducts.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ShopCategory;
