import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

const Store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export default Store;
