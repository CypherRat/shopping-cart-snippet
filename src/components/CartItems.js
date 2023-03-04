import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, clearCart } from "../redux/Actions/ProductAction";

export default function CartItems() {
  const cart = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();

  let isCartEmpty = true;
  if (cart.length > 0) isCartEmpty = false;
  return (
    <>
      <div className="cart-head">
        <div className="cart-head-title">My Cart</div>
        <div className="cart-head-items">{`${cart.length} item${
          cart.length > 1 ? "s" : ""
        }`}</div>
        {!isCartEmpty && (
          <div
            className="cart-head-clear"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </div>
        )}
      </div>
      {!isCartEmpty && (
        <>
          <div className="cart-panel dflex">
            {cart.map(({ id, title, price, quantity, total }) => {
              return (
                <div className="cart-panel-item" key={id}>
                  <div className="cart-panel-item-detail">
                    <div className="cart-panel-item-title">{title}</div>
                    <div className="cart-panel-item-price">Rs. {price}</div>
                  </div>
                  <div className="cart-panel-item-cta">
                    <div className="cart-panel-item-cta-counter">
                      <button
                        className="cart-checkout-btn"
                        onClick={() => dispatch(removeFromCart(id))}
                      >
                        Remove
                      </button>
                    </div>
                    {/* <div className="cart-panel-item-cta-total">Rs. 100</div> */}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total">
            <div className="cart-total-title">Items Total:</div>
            <div className="cart-total-items">{`${cart.length} item${
              cart.length > 1 ? "s" : ""
            }`}</div>
            <div className="cart-total-val">
              Rs.
              {cart
                .reduce((total, item) => {
                  return total + item.price;
                }, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="cart-checkout">
            <Link to="/cart">
              <button className="cart-checkout-btn">Checkout to Cart</button>
            </Link>
          </div>
        </>
      )}
      {isCartEmpty && (
        <div className="errBox">
          <span>Cart is empty</span>
        </div>
      )}
    </>
  );
}
