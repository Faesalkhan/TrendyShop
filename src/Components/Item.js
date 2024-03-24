import React from "react";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <div className="col-3">
      <Link
        to={`/product/${item.id}`}
        className="text-decoration-none text-black "
        onClick={window.scrollTo(0, 0)}
      >
        <div className="d-flex flex-column item">
          <img src={item.image} alt="" className="img-fluid"></img>
          <p className="mb-0">{item.name}</p>
          <div className="d-flex justify-content-start">
            <p className="fw-bold text-nowrap old-prices me-4">
              $ {item.new_price}
            </p>
            <p className="fw-light text-nowrap text-decoration-line-through">
              $ {item.old_price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Item;
