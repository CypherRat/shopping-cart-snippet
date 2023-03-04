import React from "react";
import useDocumentTitle from "../useDocumentTitle";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import "./cart.scss";

export default function Cart({ title }) {
  useDocumentTitle(title);
  const cart = useSelector((state) => state.ProductReducer.cart);
  let isCartEmpty = true;
  if (cart.length > 0) isCartEmpty = false;
  return (
    <>
      {isCartEmpty && (
        <div className="msgBox">
          <i className="fa-solid fa-face-sad-tear fa-4x dull"></i>
          <span>Cart is empty</span>
        </div>
      )}
      {!isCartEmpty && (
        <div className="cart dflex">
          <CartItems />
        </div>
      )}
    </>
  );
}
