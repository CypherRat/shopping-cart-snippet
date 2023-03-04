import React from "react";
import "./home.scss";
import ProductItems from "../components/ProductItems";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";

export default function Home() {
  const productIsLoading = useSelector(
    (state) => state.ProductReducer.isLoading
  );
  const cart = useSelector((state) => state.ProductReducer.cart);
  // console.log("CURRENT STATE:", productIsLoading);

  // console.log(cart);

  return (
    <div className="container">
      <div className="products dflex">
        <div className="products-label">Products</div>
        {productIsLoading && (
          <div className="msgBox">
            <i className="fa-solid fa-shop fa-2x dull"></i>
            <span>Loading...</span>
          </div>
        )}
        {!productIsLoading && <ProductItems />}
      </div>
      <div className="cart dflex">
        <CartItems />
        {/* <div className="cart-head">
          <div className="cart-head-title">My Cart</div>
          <div className="cart-head-items">0 items</div>
          <div className="cart-head-clear">Clear Cart</div>
        </div>
        <div className="cart-panel dflex">
          <div className="cart-panel-item">
            <div className="cart-panel-item-detail">
              <div className="cart-panel-item-title">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </div>
              <div className="cart-panel-item-price">Rs. 109.95</div>
            </div>
            <div className="cart-panel-item-cta">
              <div className="cart-panel-item-cta-counter">
                <button className="cart-checkout-btn">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <div className="cart-total-title">Items Total:</div>
          <div className="cart-total-items">1 item</div>
          <div className="cart-total-val">Rs. 100</div>
        </div>
        <div className="cart-checkout">
          <Link to="/cart">
            <button className="cart-checkout-btn">Checkout to Cart</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
