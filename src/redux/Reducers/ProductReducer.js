import { ActionTypes } from "../Types/Types";

const initialState = {
  products: [],
  cart: [],
  categories: [],
  filteredProducts: [],
  isLoading: false,
  isLogged: false,
  activeCategory: null,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        categories: action.payload,
        isLoading: false,
      };
    case ActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case ActionTypes.ADD_TO_CART:
      let itemExists = false;
      let updatedCart = [];
      if (state.cart.some((item) => item.id === action.payload.id))
        itemExists = true;
      if (itemExists) {
        updatedCart = [...state.cart];
      } else {
        updatedCart = [...state.cart, action.payload];
      }
      return {
        ...state,
        cart: updatedCart,
      };
    case ActionTypes.REMOVE_FROM_CART:
      let filteredCart = [];
      filteredCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: filteredCart,
      };
    case ActionTypes.FILTER_PRODUCTS:
      if (state.activeCategory === action.payload) return state;
      let filteredProducts = [];
      filteredProducts = state.products.filter((product) =>
        action.payload.includes(product.category)
      );
      return {
        ...state,
        filteredProducts: filteredProducts,
        activeCategory: action.payload,
      };
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case ActionTypes.CLEAR_CATEGORY:
      return {
        ...state,
        filteredProducts: [],
        activeCategory: null,
      };
    default:
      return state;
  }
};
