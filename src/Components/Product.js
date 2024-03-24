import React from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "./Breadcrum";
import Footer from "./Footer";
import star_dull_icon from "./Assets/star_dull_icon.png";
import star_icon from "./Assets/star_icon.png";
import RealetedProducts from "./RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./utils/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const addItem = (x) => {
    dispatch(addToCart(x));
  };

  const all_products = useSelector((store) => store.cart.items);
  const { productID } = useParams();
  const product = all_products.find((x) => x.id === Number(productID));

  return (
    <div className="container product-container">
      <div className="row">
        <Breadcrum product={product} />
        <div className="col-xs-4 col-sm-6 col-md-6">
          <div className="row justify-content-evenly align-items-start ">
            <div className="col-2 col-xs-2 col-sm-2 col-md-2 ">
              <img src={product.image} className="img-fluid my-md-1" alt="" />
              <img src={product.image} className="img-fluid my-md-1" alt="" />
              <img src={product.image} className="img-fluid my-md-1" alt="" />
              <img src={product.image} className="img-fluid my-md-1" alt="" />
            </div>
            <div className="col-5 col-xs-4 col-sm-6 col-md-9">
              <img src={product.image} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-6 col-md-6">
          <h4>{product.name}</h4>
          <p className="m-0">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <span>(122 ratings)</span>
          </p>
          <div className="d-flex my-0 my-md-1">
            <p className="fw-bold text-danger m-0 me-1 me-md-3 ">
              $ {product.new_price}
            </p>
            <p className="ms-2 text-decoration-line-through fw-light m-0">
              $ {product.old_price}
            </p>
          </div>
          <p className="m-0">
            Offering a range of lifestyle essentials that help you look good
            every day. We brings a range of utility cargos in a variety of
            colors that keep you subtle & comfortable. Built for versatility,
            our essential pair of cargos find place in every man’s wardrobe.
          </p>
          <div className="d-flex justify-content-start size-div my-1">
            <div className="bg-light mx-1 p-1 px-md-3">S</div>
            <div className="bg-light mx-1 p-1 px-md-3">M</div>
            <div className="bg-light mx-1 p-1 px-md-3">L</div>
            <div className="bg-light mx-1 p-1 px-md-3">XL</div>
            <div className="bg-light mx-1 p-1 px-md-3">XXL</div>
          </div>
          <div>
            <button
              className="btn btn-danger text-white text-nowrap "
              onClick={() => addItem(product)}
            >
              ADD TO CART
            </button>
          </div>
          <div>
            <h6 className="my-1">
              <span className="fw-bold">Category : </span>
              {product.category}
            </h6>
          </div>
        </div>
        <div className="col-12 my-1">
          <div className="btn-group my-1 my-sm-3">
            <button
              className="btn btn-primary me-2 px-1 px-sm-3"
              data-bs-toggle="collapse"
              data-bs-target="#decsriptionBox"
            >
              Details
            </button>
            <button
              className="btn btn-primary px-1 px-sm-3"
              data-bs-toggle="collapse"
              data-bs-target="#ReviewBox"
            >
              Reviews
            </button>
          </div>
          <div className="collapse" id="decsriptionBox">
            <p>
              TrendyShop is built on the pillars of quality, reliability and
              affordability, offering a range of lifestyle essentials that help
              you look good every day. It brings a range of utility cargos in a
              variety of colors that keep you subtle & comfortable. Built for
              versatility, our essential pair of cargos find place in every
              man’s wardrobe. Wear them for your casual weekend outing with
              layered shirts and a pair of boots.
            </p>
          </div>
          <div className="collapse" id="ReviewBox">
            <p>
              Customers like the value, quality, comfort, fit and fabric. They
              mention that its worth it's price, the fabric is soft and didn't
              irritate their skin, its good to wear during journey and that the
              quality of tailoring could be better.
            </p>
          </div>
        </div>
      </div>
      <RealetedProducts />
      <Footer />
    </div>
  );
};
export default Product;
