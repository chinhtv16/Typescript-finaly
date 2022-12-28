import React from "react";
import "../styles/screen.css";
import ScreenImg from "../assets/img/Done.png";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import {  TypeObject } from "../utils/types";

function Screen() {
  
  const location = useLocation()
  console.log(location.pathname)
  const navigate = useNavigate();

  const user : TypeObject = JSON.parse(localStorage.getItem("user") || "{}")

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="container">
      <img src={ScreenImg} alt="screen" className="img__screen" />
      <div className=" heading__screen">
        <span>Welcome to</span>
        <span className="heading__screen-fz">OUR REMINDER</span>
      </div>
      <p className="desc__screen">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum
        tempus, interdum at dignissim metus. Ultricies sed nunc.
      </p>
      <Button path={location.pathname} />
    </div>
  );
}

export default Screen;
