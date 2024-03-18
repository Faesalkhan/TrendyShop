import React from "react";
const Item = ({ item }) => {
  return (
    <div className="col-3">
      <div className="d-flex flex-column item">
        <img src={item.image} alt="" className="img-fluid"></img>
        <p className="mb-0">{item.name}</p>
        <div className="d-flex justify-content-start">
          <p className="fw-bold text-nowrap old-prices me-4">
            $ {item.old_price}
          </p>
          <p className="fw-light text-nowrap text-decoration-line-through  new-prices">
            $ {item.new_price}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Item;
