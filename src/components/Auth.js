import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/Actions/ProductAction";
import "./Auth.scss";

export default function Auth() {
  const dispatch = useDispatch();
  return (
    <div className="authCon">
      <div className="greet">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Namaste
          </text>
        </svg>
      </div>
      <button
        className="loginBtn"
        onClick={() => {
          dispatch(logIn());
        }}
      >
        Open Shop
      </button>
    </div>
  );
}
