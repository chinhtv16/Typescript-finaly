import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/button.scss";
import { ButtonCommonProp } from "../utils/types";
import { Button } from 'antd';


function ButtonProps({ path } : ButtonCommonProp) {
  return (
    <div className="height">
      {path === "/" ? (
        <NavLink to = "/dashboard" className="button button--icon">
          <span>Get Start</span>
          <i className="button__icon fa-solid fa-arrow-right"></i>
        </NavLink>
      ) : path === "/login" ? (
        <Button  className="button--margin-login" htmlType="submit">Sign In</Button>
      ) : (
        <Button  className = "button--margin-register" htmlType="submit">Register</Button>
      )}
    </div>
  );
}

export default ButtonProps;
