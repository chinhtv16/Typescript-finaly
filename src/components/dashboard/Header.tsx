import React, { FC } from "react";
import "../../styles/header.css";
import UserImg from "../../assets/img/Ellipse 2.png";
import { useNavigate } from "react-router-dom";
import { UserDashBoardProps } from "../../utils/types";


const Header = ({user} : UserDashBoardProps) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <img
        src={user.avatar}
        alt={UserImg}
        className="d-container__header-img"
      />
      <p className="d-container__header-name">{user.name}</p>
      <p className="d-container__header-tag">{`@${user.name}`}</p>
      <div
        onClick={() => handleLogOut()}
        className="d-container__header-button"
      >
        Log Out
      </div>
    </>
  );
};

export default Header;
