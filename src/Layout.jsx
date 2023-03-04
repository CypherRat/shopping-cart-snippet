import React from "react";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  const cart = useSelector((state) => state.ProductReducer.cart);
  const count = cart.length;
  return (
    <>
      <header>
        <Link to="/" className="bal">
          <i className="fa-solid fa-house fa-2x"></i>
        </Link>
        <Link to="/cart" className="cart bal">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
          {count > 0 && <span>{count}</span>}
        </Link>
      </header>
      <div className="local">
        <div className="local-icon">
          <i className="fa-solid fa-location-dot fa-2x"></i>
        </div>
        <div className="local-det">
          <div className="local-name">Petopia</div>
          <div className="local-add">
            11th cross, Indira Nagar, Adyar - 20, Chennai, TN, India, 600020{" "}
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
