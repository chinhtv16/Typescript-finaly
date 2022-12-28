import React, { FC } from "react";
import "../../styles/header.scss";
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
        alt= {UserImg }
        className="header-img"
      />
      <p className="header-name">{user.name}</p>
      <p className="header-tag">{`@${user.name}`}</p>
      <div
        onClick={() => handleLogOut()}
        className="header-button"
      >
        Log Out
      </div>
    </>
  );
};

export default Header;
