import React from "react";
import "../styles/screen.css";
import ScreenImg from "../assets/img/Done.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import {  TypeObject, TypeString } from "../utils/types";

function Screen() {
  const navigate = useNavigate();
  let path : TypeString = window.location.pathname.split("/")[1];
  const user : TypeObject = JSON.parse(localStorage.getItem("user") || "{}")

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="s-container">
      <img src={ScreenImg} alt="screen" className="s-container__img" />
      <div className=" s-container__heading">
        <span>Welcome to</span>
        <span className="s-container__heading--fz">OUR REMINDER</span>
      </div>
      <p className="s-container__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum
        tempus, interdum at dignissim metus. Ultricies sed nunc.
      </p>
      <Button path={path} />
    </div>
  );
}

export default Screen;
