import React, { useContext } from "react";
import Footer from "./Footer";
import { shopContext } from "./ShopContext";
import dropdown from "./Assets/dropdown_icon.png";
import Item from "./Item";
const ShopCategory = ({ banner, category }) => {
  const { all_products } = useContext(shopContext);
  return (
    <div className="container-fluid shopCategory-container">
      <div className="row justify-content-center">
        <div className="col-10  ">
          <img src={banner} className="img-fluid" />
        </div>
        <div className="col-10 my-2">
          <div className="row justify-content-between align-items-center  ">
            <div className="col-5 ">
              <p className="m-0 showingtext">
                <span className="fw-bold">Showing 1-12 </span>
                out of 36 products
              </p>
            </div>
            <div className="col-3 d-flex justify-content-end ">
              <button className="btn btn-light rounded-5 text-nowrap  ">
                Sort by <img src={dropdown} className="dropdownimg" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
            {all_products.map((item) => {
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
