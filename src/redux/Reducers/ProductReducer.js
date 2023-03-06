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
    case ActionTypes.UPDATE_CART:
      const itemIndex = state.cart.findIndex(
        (obj) => obj.id === action.payload.itemId
      );
      if (itemIndex === -1) return state;
      const itemQuantity =
        action.payload.updateType === 1
          ? action.payload.itemQuantity + 1
          : action.payload.itemQuantity - 1;
      if (itemQuantity < 1) {
        let filteredCart = [];
        filteredCart = state.cart.filter(
          (item) => item.id !== action.payload.itemId
        );
        return { ...state, cart: filteredCart };
      }
      if (itemQuantity > 10) return state;
      const itemTotal = action.payload.itemPrice * itemQuantity;
      const updatedItem = {
        ...state.cart[itemIndex],
        quantity: itemQuantity,
        total: itemTotal.toFixed(2),
      };
      const updatedCartItems = [
        ...state.cart.slice(0, itemIndex),
        updatedItem,
        ...state.cart.slice(itemIndex + 1),
      ];
      return {
        ...state,
        cart: updatedCartItems,
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
