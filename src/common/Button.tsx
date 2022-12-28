import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/button.css";
import { ButtonCommonProp } from "../utils/types";


function Button({ path } : ButtonCommonProp) {
  return (
    <div>
      {path === "/" ? (
        <NavLink to = "/dashboard" className="button button--icon">
          <span>Get Start</span>
          <i className="button__icon fa-solid fa-arrow-right"></i>
        </NavLink>
      ) : path === "/login" ? (
        <button className="button--margin-login" type="submit">Sign In</button>
      ) : (
        <button className = "button--margin-register" type="submit">Register</button>
      )}
    </div>
  );
}

export default Button;
