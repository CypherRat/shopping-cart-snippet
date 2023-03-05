import React from "react";
import "./home.scss";
import ProductItems from "../components/ProductItems";
import CartItems from "../components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCategory, filterProducts } from "../redux/Actions/ProductAction";

export default function Home() {
  const dispatch = useDispatch();
  const productIsLoading = useSelector(
    (state) => state.ProductReducer.isLoading
  );
  const categories = useSelector((state) => state.ProductReducer.categories);
  const selectedCategory = useSelector(
    (state) => state.ProductReducer.activeCategory
  );
  const uniqueCategories = categories.filter(
    (e, i) => categories.findIndex((a) => a["category"] === e["category"]) === i
  );
  return (
    <div className="container">
      <div className="categories dflex">
        <div className="categories-label">Categories</div>
        <div className="categories-wrap">
          <div className="categories-wrap-lists">
            <div
              className={`categories-wrap-lists-list${
                selectedCategory === null ? " active" : ""
              }`}
              onClick={() => dispatch(clearCategory())}
            >
              All Items
            </div>
            {uniqueCategories.length > 0 &&
              uniqueCategories.map(({ id, category }) => {
                return (
                  <div
                    key={id}
                    className={`categories-wrap-lists-list${
                      selectedCategory === category ? " active" : ""
                    }`}
                    onClick={() => dispatch(filterProducts(category))}
                  >
                    {category}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
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
      </div>
    </div>
  );
}
