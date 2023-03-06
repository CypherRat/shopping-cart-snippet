import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  addToCart,
  removeFromCart,
  updateCartItems,
} from "../redux/Actions/ProductAction";

export default function ProductItems() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.products);
  const cartItems = useSelector((state) => state.ProductReducer.cart);
  const filteredProducts = useSelector(
    (state) => state.ProductReducer.filteredProducts
  );

  let showProducts = [];
  showProducts = filteredProducts.length > 0 ? filteredProducts : products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const truncateString = (str, num = 70) => {
    if (str.length > num) return str.slice(0, num) + "...";
    return str;
  };
  return (
    <>
      {showProducts.length > 0 &&
        showProducts.map(({ id, title, price, description, image, rating }) => {
          let itemQuantity = 1;
          let itemDetails = [];
          let addedStatus = false;
          if (cartItems.some((item) => item.id === id)) addedStatus = true;
          if (addedStatus)
            itemDetails = cartItems.filter((item) => item.id === id);
          if (addedStatus) itemQuantity = itemDetails[0].quantity;
          return (
            <div className="prod" key={id}>
              <div className="prod-img">
                <img src={image} alt={title} width="100%" />
              </div>
              <div className="prod-wrap">
                <div className="prod-wrap-det">
                  <div className="prod-wrap-det-title">{title}</div>
                  <div className="prod-wrap-det-highlights">
                    <div className="prod-wrap-det-highlights-rating dflex">
                      <span>{rating.rate}</span>
                      <i className="fa-solid fa-star"></i>
                      <span>({rating.count} ratings)</span>
                    </div>
                    <div className="prod-wrap-det-highlights-price">
                      Rs. {price}
                    </div>
                  </div>
                  <div className="prod-wrap-det-description">
                    {truncateString(description)}
                  </div>
                </div>
                <div className="prod-wrap-cta">
                  {!addedStatus && (
                    <button
                      className="prod-wrap-cta-btn"
                      onClick={() => {
                        const cartItems = {
                          id: id,
                          title: title,
                          price: price,
                          quantity: 1,
                          total: price,
                        };
                        dispatch(addToCart(cartItems));
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                  {addedStatus && (
                    <>
                      <div className="prod-wrap-cta-update">
                        <button
                          className="prod-wrap-cta-btn"
                          onClick={() =>
                            dispatch(
                              updateCartItems(id, itemQuantity, price, -1)
                            )
                          }
                        >
                          -
                        </button>
                        <span>{itemQuantity}</span>
                        <button
                          className="prod-wrap-cta-btn"
                          onClick={() =>
                            dispatch(
                              updateCartItems(id, itemQuantity, price, 1)
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="prod-wrap-cta-btn"
                        onClick={() => dispatch(removeFromCart(id))}
                      >
                        Remove from Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
