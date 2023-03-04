import axios from "axios";
import { ActionTypes } from "../Types/Types";

export const fetchProducts = () => {
  // const response = [
  //   {
  //     id: 1,
  //     title: "Hello",
  //     price: 200,
  //     description: "This is something.",
  //     rating: { rate: 1, count: 10 },
  //     image: "img",
  //   },
  //   {
  //     id: 2,
  //     title: "Hello Mello",
  //     price: 200,
  //     description: "This is something.",
  //     rating: { rate: 1, count: 10 },
  //     image: "img",
  //   },
  // ];
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ActionTypes.IS_LOADING });
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch({
        type: ActionTypes.GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (productID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productID,
  };
};
export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};
