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
          <div className="row">
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
              className="row justify-content-evenly align-items-center "
            >
              <div className="col-2">
                <img src={eachItem.image} />
              </div>
              <div className="col-2">
                <p>{eachItem.size}</p>
              </div>
              <div className="col-2 ">
                <p className="fw-bold my-0">$ {eachItem.new_price}</p>
              </div>
              <div className="col-2 btn-btn-group-sm d-flex justify-content-center align-items-start">
                <button
                  className="btn btn-light"
                  onClick={() => handleDecrease(eachItem)}
                >
                  {eachItem.qty === 1 ? "🗑️" : "➖"}
                </button>
                <button className="btn border-0 disabled mx-1 mx-sm-2 fw-bold ">
                  {eachItem.qty}
                </button>
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
              <hr />
            </div>
          ))}
          <div className="row flex-column ">
            <h4>Cart Summary</h4>
            <div className="col-4">
              <span className="d-flex justify-content-between border-bottom  ">
                <h5>Subtotal</h5>
                <h5>$ {total}</h5>
              </span>
            </div>
            <div className="col-4">
              <span className="d-flex justify-content-between border-bottom ">
                <h5>Delivery</h5>
                <h5>{total < 500 ? 50 : 0}</h5>
              </span>
            </div>
            <div className="col-4">
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
