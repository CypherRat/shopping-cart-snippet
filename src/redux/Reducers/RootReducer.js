import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const RootReducer = combineReducers({ ProductReducer });

export default RootReducer;
