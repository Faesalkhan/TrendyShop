import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "./utils/cartSlice";
import Footer from "./Footer";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.sum);
  const dispatch = useDispatch();
  const handleIncrease = (x) => {
    dispatch(increaseItem(x));
  };
  const handleDecrease = (x) => {
    dispatch(decreaseItem(x));
  };
  const handleRemove = (x) => {
    dispatch(removeItem(x));
  };
  return (
    <div className="container-fluid cart-container my-3">
      {cartItems.length === 0 ? (
        <h2 className="text-center text-danger my-3 my-md-5">
          Your Cart is Empty!
        </h2>
      ) : (
        <Fragment>
          <div className="row cart-header">
            <div className="col-2">
              <h5>Product</h5>
            </div>
            <div className="col-2">
              <h5>Size</h5>
            </div>
            <div className="col-2">
              <h5>Price</h5>
            </div>
            <div className="col-2">
              <h5>Quantity</h5>
            </div>
            <div className="col-2">
              <h5>Total</h5>
            </div>
            <div className="col-2">
              <h5>Remove</h5>
            </div>
            <hr />
          </div>
          {cartItems.map((eachItem) => (
            <div
              key={eachItem.id}
              className="row justify-content-evenly align-items-center border-bottom p-2 cart-products-header"
            >
              <div className="col-2">
                <img src={eachItem.image} />
              </div>
              <div className="col-2">
                <p className="m-0 fw-bold">{eachItem.size}</p>
              </div>
              <div className="col-2 unit-price">
                <p className="fw-bold my-0 text-nowrap ">
                  $ {eachItem.new_price}
                </p>
              </div>
              <div className="col-2 btn-btn-group-sm d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-light"
                  onClick={() => handleDecrease(eachItem)}
                >
                  {eachItem.qty === 1 ? "🗑️" : "➖"}
                </button>
                <p className="border-0 mx-1 mx-sm-2 my-auto fw-bold  ">
                  {eachItem.qty}
                </p>
                <button
                  className="btn btn-light"
                  onClick={() => handleIncrease(eachItem)}
                >
                  ➕
                </button>
              </div>
              <div className="col-2">
                <p className="fw-bold m-0">
                  ${eachItem.new_price * eachItem.qty}
                </p>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-light"
                  onClick={() => handleRemove(eachItem)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="row flex-column ">
            <h4>Cart Summary</h4>
            <div className="col col-md-6">
              <span className="d-flex justify-content-between border-bottom  ">
                <h5>Subtotal</h5>
                <h5>$ {total}</h5>
              </span>
            </div>
            <div className="col col-md-6">
              <span className="d-flex justify-content-between border-bottom ">
                <h5>Delivery</h5>
                <h5>{total < 500 ? 50 : 0}</h5>
              </span>
            </div>
            <div className="col col-md-6">
              <span className="d-flex justify-content-between ">
                <h5 className="fw-bold">Total</h5>
                <h5 className="fw-bold">
                  $ {total < 500 ? total + 50 : total}
                </h5>
              </span>
            </div>
          </div>
        </Fragment>
      )}
      <Footer />
    </div>
  );
};
export default Cart;
